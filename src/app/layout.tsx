import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/common/globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Tutorial',
  description: 'Build awesome stuff with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main className="mx-auto max-w-6xl px-8 py-20">{children}</main>
      </body>
    </html>
  );
}
