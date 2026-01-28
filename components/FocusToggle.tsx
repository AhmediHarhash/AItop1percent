"use client";

import { useEffect, useState } from "react";

export default function FocusToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("focus-mode") === "true";
    setEnabled(stored);
    if (stored) {
      document.documentElement.dataset.focus = "true";
    }
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    if (next) {
      document.documentElement.dataset.focus = "true";
    } else {
      delete document.documentElement.dataset.focus;
    }
    window.localStorage.setItem("focus-mode", String(next));
  };

  return (
    <button
      type="button"
      className="focus-toggle"
      aria-pressed={enabled}
      onClick={toggle}
      title="Toggle focus mode"
    >
      {enabled ? "Focus: On" : "Focus: Off"}
    </button>
  );
}
