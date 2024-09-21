'use client'

import { CheckoutProvider } from '@/context/CheckoutContext'
import CheckoutForm from '@/components/CheckoutForm'

export default function CheckoutPage() {
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