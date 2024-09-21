import Hero from '@/components/Hero'
import ImageGrid from '@/components/ImageGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <ImageGrid />
    </main>
  )
}