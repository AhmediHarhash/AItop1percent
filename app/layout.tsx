import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ReadingProgress from "../components/ReadingProgress";

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "AItop1percent",
  description: "A living AI doctrine and study system."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <ReadingProgress />
        <div className="app-shell">
          <Sidebar />
          <div className="app-main">
            <Topbar />
            <main className="content">{children}</main>
            <footer className="footer">
              <span>Built for deep work. Updated as AI evolves.</span>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
