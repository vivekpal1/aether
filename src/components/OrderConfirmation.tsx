import { useCheckout } from '@/context/CheckoutContext'
import Link from 'next/link'

type OrderConfirmationProps = {
  onBack: () => void
}

export default function OrderConfirmation({ onBack }: OrderConfirmationProps) {
  const { billingInfo, shippingMethod, paymentMethod } = useCheckout()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Order Confirmation</h2>
      <div>
        <h3 className="font-medium">Billing Information</h3>
        <p>{billingInfo.firstName} {billingInfo.lastName}</p>
        <p>{billingInfo.address}</p>
        <p>{billingInfo.city}, {billingInfo.state} {billingInfo.zipCode}</p>
      </div>
      <div>
        <h3 className="font-medium">Shipping Method</h3>
        <p>{shippingMethod}</p>
      </div>
      <div>
        <h3 className="font-medium">Payment Method</h3>
        <p>{paymentMethod}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
        <Link
          href="/"
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Place Order
        </Link>
      </div>
    </div>
  )
}