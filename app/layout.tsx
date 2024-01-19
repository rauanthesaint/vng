import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Provider from './provider';
import Header from '@/components/header.component';
import Footer from '@/components/footer.component';

const inter = Inter({ subsets: ['latin', 'cyrillic-ext'] });

export const metadata: Metadata = {
    title: 'Name',
    description: 'Created by Rauan The Saint using Next, NextUI',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provider>
                    <Header />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
