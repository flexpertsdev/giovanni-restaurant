'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

const galleryImages: GalleryImage[] = [
  // Interior
  { id: 1, src: '/images/interior-main-dining.jpg', alt: 'Main dining room with warm lighting', category: 'Interior' },
  { id: 2, src: '/images/interior-bar.jpg', alt: 'Cozy bar area', category: 'Interior' },
  { id: 3, src: '/images/interior-private-room.jpg', alt: 'Private dining room', category: 'Interior' },
  { id: 4, src: '/images/interior-entrance.jpg', alt: 'Restaurant entrance', category: 'Interior' },
  
  // Dishes
  { id: 5, src: '/images/dish-goulash.jpg', alt: 'Goulash Triestino', category: 'Dishes' },
  { id: 6, src: '/images/dish-seafood-risotto.jpg', alt: 'Seafood Risotto', category: 'Dishes' },
  { id: 7, src: '/images/dish-presnitz.jpg', alt: 'Traditional Presnitz dessert', category: 'Dishes' },
  { id: 8, src: '/images/dish-jota.jpg', alt: 'Jota Triestina soup', category: 'Dishes' },
  { id: 9, src: '/images/dish-sardoni.jpg', alt: 'Sardoni in Savor', category: 'Dishes' },
  { id: 10, src: '/images/dish-boreto.jpg', alt: 'Boreto alla Graisana', category: 'Dishes' },
  
  // Events
  { id: 11, src: '/images/event-thursday-music.jpg', alt: 'Thursday live music night', category: 'Events' },
  { id: 12, src: '/images/event-celebration.jpg', alt: 'Birthday celebration', category: 'Events' },
  { id: 13, src: '/images/event-wine-tasting.jpg', alt: 'Wine tasting event', category: 'Events' },
  { id: 14, src: '/images/event-cooking-class.jpg', alt: 'Cooking class with chef', category: 'Events' },
  
  // Team
  { id: 15, src: '/images/team-chef.jpg', alt: 'Head Chef Giovanni III', category: 'Team' },
  { id: 16, src: '/images/team-kitchen.jpg', alt: 'Kitchen team at work', category: 'Team' },
  { id: 17, src: '/images/team-servers.jpg', alt: 'Our friendly service team', category: 'Team' },
  { id: 18, src: '/images/team-family.jpg', alt: 'The Giovanni family', category: 'Team' },
]

const categories = ['All', 'Interior', 'Dishes', 'Events', 'Team']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-giovanni-cream">
      {/* Header */}
      <section className="bg-giovanni-terracotta text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-4">Gallery</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            A visual journey through Giovanni's - from our warm ambiance to our 
            exquisite dishes and vibrant community events
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-20 md:top-24 z-20 bg-white shadow-md">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-giovanni-terracotta text-white'
                    : 'bg-giovanni-cream text-giovanni-charcoal hover:bg-giovanni-terracotta/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square bg-giovanni-blue/10 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-giovanni-blue/30 text-sm text-center px-4">
                    {image.alt}
                  </span>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-semibold">{image.category}</p>
                    <p className="text-xs opacity-80">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-giovanni-amber transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Image placeholder */}
            <div className="aspect-video bg-giovanni-blue/10 flex items-center justify-center">
              <span className="text-giovanni-blue/30 text-lg">{selectedImage.alt}</span>
            </div>
            
            {/* Image details */}
            <div className="p-6">
              <p className="text-sm text-giovanni-terracotta font-semibold mb-2">{selectedImage.category}</p>
              <p className="text-giovanni-charcoal">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}