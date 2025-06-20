import Link from 'next/link'
import { Phone, Clock, MapPin } from 'lucide-react'

export default function ReservationCTA() {
  return (
    <section className="section bg-giovanni-cream">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl text-giovanni-blue mb-6">
            Join Us for an Unforgettable Evening
          </h2>
          <p className="text-lg text-giovanni-charcoal/70 mb-12">
            Whether it's a romantic dinner, family celebration, or Thursday music night, 
            we're here to make your experience special
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-giovanni-blue/10 rounded-full mb-4">
                <Clock className="w-8 h-8 text-giovanni-blue" />
              </div>
              <h3 className="font-semibold text-giovanni-charcoal mb-2">Hours</h3>
              <p className="text-giovanni-charcoal/60">
                Tue-Thu: 5:00 PM - 10:00 PM<br />
                Fri-Sat: 5:00 PM - 11:00 PM<br />
                Sun: 4:00 PM - 9:00 PM<br />
                <span className="text-giovanni-terracotta">Closed Mondays</span>
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-giovanni-terracotta/10 rounded-full mb-4">
                <Phone className="w-8 h-8 text-giovanni-terracotta" />
              </div>
              <h3 className="font-semibold text-giovanni-charcoal mb-2">Contact</h3>
              <p className="text-giovanni-charcoal/60">
                <a href="tel:+1234567890" className="hover:text-giovanni-terracotta transition-colors">
                  (123) 456-7890
                </a><br />
                <a href="mailto:info@giovannis.com" className="hover:text-giovanni-terracotta transition-colors">
                  info@giovannis.com
                </a>
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-giovanni-amber/20 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-giovanni-amber-dark" />
              </div>
              <h3 className="font-semibold text-giovanni-charcoal mb-2">Location</h3>
              <p className="text-giovanni-charcoal/60">
                123 Harbor Street<br />
                Little Italy District<br />
                Your City, ST 12345
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations" className="btn btn-primary">
              Make a Reservation
            </Link>
            <a href="tel:+1234567890" className="btn btn-outline">
              Call Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}