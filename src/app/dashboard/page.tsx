'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export default function Dashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/')
    }
  }, [user, loading, router])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h1>
      <div>
        <h2 className="text-xl font-semibold mb-2">Your World ID Information:</h2>
        <p><strong>Sub:</strong> {user.sub}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Verification Level:</strong> {user['https://id.worldcoin.org/v1'].verification_level}</p>
      </div>
    </div>
  )
}