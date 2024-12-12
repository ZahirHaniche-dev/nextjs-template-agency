import './globals.css';
import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';
import Linkedin from '@/components/ui/linkedin';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: 'Next.js SaaS Starter',
  description: 'Get started quickly with Next.js, Postgres, and Stripe.'
};


export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();

  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white  ${jetbrainsMono.className}`}
    >
      <body className="space-bg min-h-[100dvh] overflow-auto">
        <UserProvider userPromise={userPromise}>{children}</UserProvider>
        <Linkedin  />
      </body>
    </html>
  );
}
