import type { ReactNode } from "react";

export type CalloutVariant = "note" | "idea" | "warning" | "danger";

type CalloutProps = {
  title?: string;
  variant?: CalloutVariant;
  children: ReactNode;
};

const labels: Record<CalloutVariant, string> = {
  note: "Note",
  idea: "Idea",
  warning: "Warning",
  danger: "Danger"
};

export default function Callout({ title, variant = "note", children }: CalloutProps) {
  const label = title || labels[variant];

  return (
    <div className={`callout callout-${variant}`}>
      <div className="callout-title">{label}</div>
      <div className="callout-body">{children}</div>
    </div>
  );
}
