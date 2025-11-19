import type { Metadata } from "next";
import Navbar from "./components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next Project",
  description: "Learning Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
