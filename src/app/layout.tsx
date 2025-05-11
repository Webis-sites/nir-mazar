import './globals.css';
import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import Navbar from '@/components/Navbar';

// Initialize Heebo font with Hebrew support
const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
});

export const metadata: Metadata = {
  title: 'ניר מזר מורה לנהיגה',
  description: 'שיעורי נהיגה אוטומטית עם ניר מזר - מורה נהיגה מקצועי ומנוסה',
  keywords: ['מורה נהיגה', 'שיעורי נהיגה', 'נהיגה אוטומטית', 'ניר מזר'],
  authors: [{ name: 'ניר מזר' }],
  creator: 'ניר מזר',
  publisher: 'ניר מזר',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.nirmazar.co.il',
    title: 'ניר מזר מורה לנהיגה',
    description: 'שיעורי נהיגה אוטומטית עם ניר מזר - מורה נהיגה מקצועי ומנוסה',
    siteName: 'ניר מזר מורה לנהיגה',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'ניר מזר מורה לנהיגה',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ניר מזר מורה לנהיגה',
    description: 'שיעורי נהיגה אוטומטית עם ניר מזר - מורה נהיגה מקצועי ומנוסה',
    images: ['https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="min-h-screen text-gray-900 font-heebo" style={{ background: 'linear-gradient(120deg, #3b82f6 0%, #ffffff 100%)', backgroundAttachment: 'fixed' }}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}