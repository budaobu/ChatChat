import type { Metadata, Viewport } from 'next';
import { Onest } from 'next/font/google';

import RootProvider from '@/app/provider';

import '@/styles/globals.css';
import 'tippy.js/dist/tippy.css';

const onest = Onest({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Chat Chat',
    description: 'Chat Chat - Unlock next-level conversations with AI',
};

export const viewport: Viewport = {
    minimumScale: 1,
};

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    return (
        <html lang={locale} className={onest.className} suppressHydrationWarning>
            <RootProvider>{children}</RootProvider>
        </html>
    );
}
