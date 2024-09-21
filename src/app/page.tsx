'use client'

import { useAuth } from '@/hooks/useAuth'
import Hero from '@/components/Hero'
import ImageGrid from '@/components/ImageGrid'
import Link from 'next/link'

export default function Home() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {user ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome back, {user.name}!</h2>
            <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-4">Sign in to access your account and start shopping.</p>
          </div>
        )}
      </div>
      <ImageGrid />
    </main>
  )
}