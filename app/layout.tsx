import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

import { Header } from '@/components/features/layout/Header';
import { AuthProvider } from "@/components/features/auth/AuthProvider"; // Import the client-side provider

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
                {/* AuthProvider creates a client boundary. 
                It allows the session context to be available to all client components in the app. */}
                <AuthProvider>
                    <Header />
                    {/* The main tag where the content of individual pages will be rendered */}
                    <main>{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}
