import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Readora - Your Book Discovery Platform",
    description: "Track your reading, discover new books, and connect with fellow readers",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>

                <div className="min-h-screen bg-background">
                    <Header />

                    <div className="flex "> {/* pt-14 để chừa chỗ cho header */}
                        <Sidebar />

                        <main className="ml-64 flex-1 p-6 overflow-y-auto">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
