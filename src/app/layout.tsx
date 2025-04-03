import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "低代码平台",
  description: "快速生成页面配置的低代码平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="h-full" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased min-h-full bg-[#F8F9FF]`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
