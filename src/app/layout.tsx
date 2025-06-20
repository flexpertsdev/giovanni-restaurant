import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/navigation/Navigation'

export const metadata: Metadata = {
  title: "Giovanni's - Authentic Trieste Cuisine",
  description: 'Experience traditional home-style food from Trieste where the company is as important as the food. Live bands every Thursday night.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="pt-20 md:pt-24 pb-20 md:pb-0">
          {children}
        </main>
      </body>
    </html>
  )
}