'use client'

import Link from 'next/link'
import { Calendar, Music } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
    '/images/restaurant-ambiance-1.jpg',
    '/images/restaurant-ambiance-2.jpg',
    '/images/restaurant-ambiance-3.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white animate-fade-in">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-4 animate-slide-up">
          Benvenuti da Giovanni's
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
          Where Trieste tradition meets modern hospitality
        </p>
        <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto opacity-90 animate-slide-up animation-delay-400">
          Experience authentic home-style cuisine from the heart of Trieste, 
          where every meal is a celebration and the company is as important as the food.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up animation-delay-600">
          <Link href="/reservations" className="btn btn-primary bg-giovanni-amber hover:bg-giovanni-amber-dark text-giovanni-charcoal">
            <Calendar className="w-5 h-5 mr-2" />
            Reserve Your Table
          </Link>
          <Link href="/menu" className="btn btn-outline border-white text-white hover:bg-white hover:text-giovanni-charcoal">
            View Our Menu
          </Link>
        </div>

        {/* Thursday Music Banner */}
        <div className="inline-flex items-center space-x-2 bg-giovanni-terracotta/90 backdrop-blur-sm px-6 py-3 rounded-full animate-pulse">
          <Music className="w-5 h-5" />
          <span className="font-semibold">Live Music Every Thursday Night!</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}