import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ClientLayout } from '@/components/layout/ClientLayout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Premium Water Chestnut Flour (Singhara) | SP Trading',
    template: '%s | SP Trading'
  },
  description: 'Global supplier of premium organic water chestnut flour (Singhara Atta). Gluten-free, export-quality, and farm-fresh for B2B and retail.',
  keywords: ['Water Chestnut', 'Singhara Flour', 'Organic', 'Gluten Free', 'Export', 'B2B', 'Bulk'],
  metadataBase: new URL('https://www.sptrading.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-highlight selection:text-white">
        <ClientLayout>
          {children}
        </ClientLayout>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SP Trading',
              url: 'https://www.sptrading.com',
              logo: 'https://www.sptrading.com/images/logo.png',
              sameAs: [
                'https://www.facebook.com/sptrading',
                'https://www.instagram.com/sptrading',
                'https://www.linkedin.com/company/sptrading'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9876543210',
                contactType: 'customer service',
                areaServed: 'Worldwide',
                availableLanguage: ['English', 'Hindi']
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
