import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Island Tracker',
    description: 'Animal Crossing Dashboard with Raw SQL and Next.js',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-[#F7F6F3] antialiased">
                {children}
            </body>
        </html>
    )
}