import Link from 'next/link'

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        SEAMLESS<br />CHECKOUT,<br />REINVENTED
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Building a secure, private, and lightning-fast<br />checkout experience with Aether
      </p>
      <div className="space-x-4">
        <Link href="/checkout" className="bg-black text-white px-6 py-2 rounded inline-block">
          Start Building
        </Link>
        <button className="bg-white text-black px-6 py-2 rounded border border-black">
          Learn More
        </button>
      </div>
    </div>
  )
}