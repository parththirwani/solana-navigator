import { AnnouncementBanner } from "@/components/announcement-banner"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Solana Navigator - AI-Powered Blockchain Explorer",
  description: "Navigate the Solana blockchain with ease using AI-powered assistance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="pb-10">
          {children}
        </div>
      </body>
    </html>
  )
}