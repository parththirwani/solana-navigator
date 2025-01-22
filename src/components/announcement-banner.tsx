"use client"
import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import Link from "next/link"

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="w-full bg-blue-600 text-white">
      <div className="container relative flex items-center gap-3 px-4 py-3 pl-24">
        <div className="flex items-center gap-3">
          <p className="text-sm">Discover the future of Solana blockchain interaction in 2025</p>
          <Link href="/report" className="flex items-center text-sm font-medium hover:underline">
            Read report <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-0 text-white hover:opacity-75"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}