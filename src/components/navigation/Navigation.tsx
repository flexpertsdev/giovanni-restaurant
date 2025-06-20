'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Calendar, Home, UtensilsCrossed, Camera, BookOpen } from 'lucide-react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

export interface NavItem {
  href: string
  label: string
  icon?: React.ElementType
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/menu', label: 'Menu', icon: UtensilsCrossed },
  { href: '/gallery', label: 'Gallery', icon: Camera },
  { href: '/story', label: 'Our Story', icon: BookOpen },
  { href: '/reservations', label: 'Reserve', icon: Calendar },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <DesktopNav />
      <MobileNav isOpen={mobileMenuOpen} onToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
    </>
  )
}