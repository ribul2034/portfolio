import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rishika Jain | Full Stack Developer",
  description:
    "Portfolio of Rishika Jain, Full Stack Developer specializing in scalable backends, data pipelines, and web platforms.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
