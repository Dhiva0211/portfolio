import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhivakar Ramesh | Software Engineer Portfolio",
  description:
    "Terminal-style developer portfolio of Dhivakar Ramesh – Software Engineer, Full-Stack & Backend, Data & ML.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
