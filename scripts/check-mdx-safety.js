#!/usr/bin/env node
/**
 * MDX Safety Checker
 * Only checks NEW or CHANGED lines in staged .mdx files for
 * curly braces and angle brackets that break MDX builds.
 *
 * Usage:
 *   node scripts/check-mdx-safety.js [files...]
 *   If files given, checks only the staged diff lines for those files.
 *   If no files given, checks staged diff lines for all staged .mdx files.
 */

const { execSync } = require("child_process");

let files = process.argv.slice(2);

if (files.length === 0) {
  const result = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: "utf8" });
  files = result.trim().split("\n").filter(f => f.endsWith(".mdx"));
}

if (files.length === 0) {
  console.log("No staged .mdx files to check.");
  process.exit(0);
}

let errorCount = 0;

for (const file of files) {
  // Get only the added/changed lines from the staged diff
  let diff;
  try {
    diff = execSync(`git diff --cached -U0 "${file}"`, { encoding: "utf8" });
  } catch {
    continue;
  }

  const lines = diff.split("\n");
  let currentLine = 0;

  for (const line of lines) {
    // Parse hunk header to get line numbers: @@ -old,count +new,count @@
    const hunkMatch = line.match(/^@@ .+ \+(\d+)/);
    if (hunkMatch) {
      currentLine = parseInt(hunkMatch[1], 10);
      continue;
    }

    // Only check added lines (start with +, but not the +++ file header)
    if (!line.startsWith("+") || line.startsWith("+++")) continue;

    const content = line.slice(1); // remove the leading +

    // Skip fenced code block markers
    if (content.trimStart().startsWith("```")) {
      currentLine++;
      continue;
    }

    // Strip inline code before checking
    const prose = content.replace(/`[^`]+`/g, "");

    if (/[{}]/.test(prose)) {
      console.error(`ERROR ${file}:${currentLine} — curly brace found (MDX parses as JSX)`);
      console.error(`  ${content.trim()}`);
      errorCount++;
    }

    if (/<[a-zA-Z\/!]/.test(prose)) {
      console.error(`ERROR ${file}:${currentLine} — angle bracket found (MDX parses as JSX tag)`);
      console.error(`  ${content.trim()}`);
      errorCount++;
    }

    currentLine++;
  }
}

if (errorCount > 0) {
  console.error(`\n${errorCount} MDX safety error(s) in new/changed lines. Fix before committing.`);
  console.error("Replace braces/brackets with prose. See CLAUDE.md for rules.");
  process.exit(1);
} else {
  console.log(`Checked new lines in ${files.length} staged .mdx file(s) — all clean.`);
}
