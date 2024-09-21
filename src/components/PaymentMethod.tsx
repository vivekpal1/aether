import { useState } from 'react'
import { useCheckout } from '@/context/CheckoutContext'

type PaymentMethodProps = {
  onNext: () => void
  onBack: () => void
}

const paymentMethods = [
  { id: 'credit_card', name: 'Credit Card' },
  { id: 'paypal', name: 'PayPal' },
  { id: 'apple_pay', name: 'Apple Pay' },
]

export default function PaymentMethod({ onNext, onBack }: PaymentMethodProps) {
  const { setPaymentMethod } = useCheckout()
  const [selectedMethod, setSelectedMethod] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentMethod(selectedMethod)
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Select Payment Method</h2>
      {paymentMethods.map((method) => (
        <div key={method.id} className="flex items-center">
          <input
            type="radio"
            id={method.id}
            name="paymentMethod"
            value={method.id}
            checked={selectedMethod === method.id}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="mr-2"
            required
          />
          <label htmlFor={method.id}>{method.name}</label>
        </div>
      ))}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Review Order
        </button>
      </div>
    </form>
  )
}