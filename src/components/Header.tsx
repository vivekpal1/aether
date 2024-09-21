import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">AETHER</span>
              <span className="text-2xl font-bold text-gray-900">AETHER.</span>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link href="/pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/docs" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Docs
              </Link>
              <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}