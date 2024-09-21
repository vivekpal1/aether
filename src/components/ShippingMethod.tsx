import { useState } from 'react'
import { useCheckout } from '@/context/CheckoutContext'

type ShippingMethodProps = {
  onNext: () => void
  onBack: () => void
}

const shippingMethods = [
  { id: 'standard', name: 'Standard Shipping', price: 5.99 },
  { id: 'express', name: 'Express Shipping', price: 14.99 },
]

export default function ShippingMethod({ onNext, onBack }: ShippingMethodProps) {
  const { setShippingMethod } = useCheckout()
  const [selectedMethod, setSelectedMethod] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShippingMethod(selectedMethod)
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Select Shipping Method</h2>
      {shippingMethods.map((method) => (
        <div key={method.id} className="flex items-center">
          <input
            type="radio"
            id={method.id}
            name="shippingMethod"
            value={method.id}
            checked={selectedMethod === method.id}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="mr-2"
            required
          />
          <label htmlFor={method.id} className="flex justify-between w-full">
            <span>{method.name}</span>
            <span>${method.price.toFixed(2)}</span>
          </label>
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
          Continue to Payment
        </button>
      </div>
    </form>
  )
}