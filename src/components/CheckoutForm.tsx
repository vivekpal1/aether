import { useCheckout } from '@/context/CheckoutContext';
import BillingInfo from '@/components/BillingInfo';
import ShippingMethod from '@/components/ShippingMethod';
import PaymentMethod from '@/components/PaymentMethod';
import OrderConfirmation from '@/components/OrderConfirmation';
import WorldIDVerification from '@/components/WorldIDVerification';

const steps = ['Welcome', 'Verification', 'Shipping method', 'Payment', 'Order']

export default function CheckoutForm() {
  const { step, setStep } = useCheckout()

  const nextStep = () => setStep(Math.min(step + 1, steps.length - 1))
  const prevStep = () => setStep(Math.max(step - 1, 0))

  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((stepName, index) => (
            <div key={stepName} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= step ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}>
                {index + 1}
              </div>
              <span className="mt-2 text-sm">{stepName}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 h-2 bg-gray-200">
          <div
            className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {step === 0 && <BillingInfo onNext={nextStep} />}
      {step === 1 && <WorldIDVerification onSuccess={nextStep} onError={prevStep} />}
      {step === 2 && <ShippingMethod onNext={nextStep} onBack={prevStep} />}
      {step === 3 && <PaymentMethod onNext={nextStep} onBack={prevStep} />}
      {step === 4 && <OrderConfirmation onBack={prevStep} />}
    </div>
  )
}