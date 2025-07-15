import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/features/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'KoryenAlbCraft',
    description: 'Albion Online Crafting Profit Calculator',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
