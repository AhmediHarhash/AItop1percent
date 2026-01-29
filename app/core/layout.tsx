"use client";

import PageNav from "../../components/PageNav";

export default function CoreLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <PageNav />
    </>
  );
}
