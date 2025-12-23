import type { Metadata } from "next";
import { Schoolbell } from "next/font/google";
import "./globals.css";
import Header from '@/components/header';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const jmadh = Schoolbell({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sorteio",
  description: "pelo yuri!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={jmadh.className}>
        <AntdRegistry>
          <Header />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
