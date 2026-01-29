import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function extractText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (children && typeof children === "object" && "props" in children) {
    return extractText((children as any).props.children);
  }
  return "";
}

function Heading({
  level,
  children,
  ...props
}: {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
  [key: string]: any;
}) {
  const Tag = `h${level}` as const;
  const text = extractText(children);
  const id = props.id || slugify(text);
  return (
    <Tag id={id} {...props}>
      {children}
    </Tag>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <Heading level={1} {...props} />,
    h2: (props) => <Heading level={2} {...props} />,
    h3: (props) => <Heading level={3} {...props} />,
    h4: (props) => <Heading level={4} {...props} />,
    h5: (props) => <Heading level={5} {...props} />,
    h6: (props) => <Heading level={6} {...props} />,
  };
}
