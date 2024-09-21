import React, { createContext, useContext, useState } from 'react'

type CheckoutContextType = {
  step: number
  setStep: (step: number) => void
  billingInfo: any
  setBillingInfo: (info: any) => void
  shippingMethod: string
  setShippingMethod: (method: string) => void
  paymentMethod: string
  setPaymentMethod: (method: string) => void
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined)

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(0)
  const [billingInfo, setBillingInfo] = useState({})
  const [shippingMethod, setShippingMethod] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  return (
    <CheckoutContext.Provider value={{
      step,
      setStep,
      billingInfo,
      setBillingInfo,
      shippingMethod,
      setShippingMethod,
      paymentMethod,
      setPaymentMethod,
    }}>
      {children}
    </CheckoutContext.Provider>
  )
}

export function useCheckout() {
  const context = useContext(CheckoutContext)
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider')
  }
  return context
}