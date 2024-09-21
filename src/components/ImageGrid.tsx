import Image from 'next/image'

const images = [
  { src: '/images/e-commerce.jpg', alt: 'E-Commerce', label: 'E-COMMERCE' },
  { src: '/images/branding.jpg', alt: 'Branding', label: 'BRANDING' },
  { src: '/images/web-designing.jpg', alt: 'Web Designing', label: 'WEB DESIGNING' },
  { src: '/images/digital-marketing.jpg', alt: 'Digital Marketing', label: 'DIGITAL MARKETING' },
  { src: '/images/influencer.jpg', alt: 'Influencer', label: 'INFLUENCER' },
]

export default function ImageGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <span className="absolute bottom-2 left-2 bg-white px-2 py-1 text-xs font-semibold">
              {image.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}