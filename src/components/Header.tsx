'use client';

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import WorldIDSignIn from '@/components/WorldIDSignIn'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('user')
    setIsLoggedIn(!!user)
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    router.push('/')
  }

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">AETHER</span>
              <span className="text-2xl font-bold text-gray-900">AETHER.</span>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link href="/pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/docs" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Docs
              </Link>
              <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
          <div>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <WorldIDSignIn />
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}