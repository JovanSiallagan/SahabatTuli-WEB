import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahabat Tuli — Komunikasi Suara & Teks Dua Arah",
  description:
    "Sahabat Tuli membantu percakapan langsung antara Teman Tuli dan Teman Dengar melalui konversi Suara ke Teks dan Teks ke Suara secara real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-white text-slate-800 font-sans antialiased selection:bg-brand-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
