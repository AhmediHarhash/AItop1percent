#!/usr/bin/env node
/**
 * MDX Safety Checker
 * Scans .mdx files for curly braces and angle brackets in prose
 * that would break the MDX/JSX build.
 *
 * Usage: node scripts/check-mdx-safety.js [files...]
 * If no files given, scans all .mdx files under app/
 */

const fs = require("fs");
const { execSync } = require("child_process");

let files = process.argv.slice(2);

if (files.length === 0) {
  const result = execSync('git ls-files "app/**/*.mdx"', { encoding: "utf8" });
  files = result.trim().split("\n").filter(Boolean);
}

let errorCount = 0;

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    // Toggle fenced code block state
    if (line.trimStart().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    // Skip lines inside fenced code blocks
    if (inCodeBlock) continue;

    // Strip inline code (backtick spans) before checking
    const prose = line.replace(/`[^`]+`/g, "");

    // Check for curly braces (JSX expressions)
    if (/[{}]/.test(prose)) {
      console.error(`ERROR ${file}:${lineNum} — curly brace found (MDX parses as JSX)`);
      console.error(`  ${line.trim()}`);
      errorCount++;
    }

    // Check for angle brackets that look like tags (not math comparisons)
    if (/<[a-zA-Z\/!]/.test(prose)) {
      console.error(`ERROR ${file}:${lineNum} — angle bracket < found (MDX parses as JSX tag)`);
      console.error(`  ${line.trim()}`);
      errorCount++;
    }
  }
}

if (errorCount > 0) {
  console.error(`\n${errorCount} MDX safety error(s) found. Fix before committing.`);
  console.error("Replace braces/brackets with prose. See CLAUDE.md for rules.");
  process.exit(1);
} else {
  console.log(`Checked ${files.length} .mdx files — all clean.`);
}
