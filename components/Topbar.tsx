"use client";

import { usePathname } from "next/navigation";
import FocusToggle from "./FocusToggle";
import { coreSections } from "../lib/core-sections";

function getLabel(pathname: string) {
  if (pathname === "/") return "Home";
  if (pathname === "/core") return "Core Spine";
  if (pathname.startsWith("/core/")) {
    const slug = pathname.replace("/core/", "");
    const match = coreSections.find((section) => slug.startsWith(section.path));
    if (match) return `Core / ${match.id} ${match.title}`;
    return "Core";
  }
  return pathname.replace("/", "");
}

export default function Topbar() {
  const pathname = usePathname() || "/";
  const label = getLabel(pathname);

  return (
    <div className="topbar">
      <div className="topbar-title">{label}</div>
      <div className="topbar-actions">
        <FocusToggle />
      </div>
    </div>
  );
}
