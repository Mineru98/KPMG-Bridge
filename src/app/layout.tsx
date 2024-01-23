import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProviders from "@/lib/react-query-provider";
import "@/app/globals.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KPMG",
  description: "RAG 사내정보망 검색 시스템",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className={inter.className}>
        <ReactQueryProviders>
          <Header />
          {children}
        </ReactQueryProviders>
      </body>
    </html>
  );
}
