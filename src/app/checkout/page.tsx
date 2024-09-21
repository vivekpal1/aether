'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CheckoutProvider } from '@/context/CheckoutContext'
import CheckoutForm from '@/components/CheckoutForm'
import { useAuth } from '@/hooks/useAuth'

export default function CheckoutPage() {
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
    <CheckoutProvider>
      <main className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          <CheckoutForm />
        </div>
      </main>
    </CheckoutProvider>
  )
}