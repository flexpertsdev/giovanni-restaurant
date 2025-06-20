'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'
import { navItems } from './Navigation'

export default function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="desktop-only fixed top-0 left-0 right-0 z-50 glass border-b border-giovanni-blue/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-giovanni-blue rounded-full flex items-center justify-center">
              <span className="text-white font-display text-xl font-bold">G</span>
            </div>
            <div>
              <h1 className="font-display text-2xl text-giovanni-blue">Giovanni's</h1>
              <p className="text-xs text-giovanni-charcoal/60">Authentic Trieste Cuisine</p>
            </div>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-semibold transition-colors duration-200 hover:text-giovanni-terracotta ${
                  pathname === item.href ? 'text-giovanni-terracotta' : 'text-giovanni-charcoal'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-giovanni-blue hover:text-giovanni-terracotta transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(123) 456-7890</span>
            </a>
            <Link href="/reservations" className="btn btn-primary">
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}