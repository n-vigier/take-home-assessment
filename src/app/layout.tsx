import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nicolas Vigier - Take Home Assessment',
  description:
    'Vercel Senior Customer Success Engineer, EMEA Take Home Assessment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex min-h-screen max-w-6xl flex-col items-center mx-auto p-24 prose dark:prose-invert prose-h1:font-semibold prose-h2:font-medium prose-blockquote:border-l-4 prose-blockquote:border-gray-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:prose-lg'>
          <Link href='/' className='no-underline'>
            <h1>Nicolas Vigier - Take Home Assessment</h1>
          </Link>
          {children}
        </main>
      </body>
    </html>
  );
}
