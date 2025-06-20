'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navItems } from './Navigation'

interface MobileNavProps {
  isOpen: boolean
  onToggle: () => void
}

export default function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-only fixed top-0 left-0 right-0 z-50 glass border-b border-giovanni-blue/10">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-giovanni-blue rounded-full flex items-center justify-center">
                <span className="text-white font-display text-lg font-bold">G</span>
              </div>
              <h1 className="font-display text-xl text-giovanni-blue">Giovanni's</h1>
            </Link>
            
            <button
              onClick={onToggle}
              className="touch-target flex items-center justify-center text-giovanni-charcoal"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="mobile-only fixed inset-0 z-40 bg-black/50"
          onClick={onToggle}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`mobile-only fixed top-16 right-0 bottom-0 z-40 w-80 max-w-[calc(100vw-3rem)] bg-white transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="p-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onToggle}
              className={`flex items-center space-x-3 py-4 border-b border-giovanni-blue/10 transition-colors ${
                pathname === item.href
                  ? 'text-giovanni-terracotta font-semibold'
                  : 'text-giovanni-charcoal hover:text-giovanni-terracotta'
              }`}
            >
              {item.icon && <item.icon className="w-5 h-5" />}
              <span className="text-lg">{item.label}</span>
            </Link>
          ))}
          
          <div className="mt-8 space-y-4">
            <a
              href="tel:+1234567890"
              className="block text-center py-3 text-giovanni-blue font-semibold"
            >
              Call: (123) 456-7890
            </a>
            <Link
              href="/reservations"
              onClick={onToggle}
              className="btn btn-primary w-full text-center"
            >
              Book a Table
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-only fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-giovanni-blue/10 safe-padding-bottom">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                pathname === item.href
                  ? 'text-giovanni-terracotta'
                  : 'text-giovanni-charcoal/60 hover:text-giovanni-terracotta'
              }`}
            >
              {item.icon && <item.icon className="w-5 h-5" />}
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}