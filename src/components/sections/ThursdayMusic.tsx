'use client'

import { Music, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

const upcomingPerformers = [
  { date: 'Dec 28', artist: 'Marco & The Adriatics', genre: 'Traditional Italian Jazz' },
  { date: 'Jan 4', artist: 'Bella Voce Trio', genre: 'Classical & Opera' },
  { date: 'Jan 11', artist: 'The Trieste Strings', genre: 'Folk & Mediterranean' },
]

export default function ThursdayMusic() {
  return (
    <section className="section bg-gradient-to-br from-giovanni-blue to-giovanni-blue-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-giovanni-amber rounded-full mb-6">
            <Music className="w-10 h-10 text-giovanni-charcoal" />
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Thursday Live Music Nights
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Every Thursday, Giovanni's transforms into a vibrant venue where the melodies of Italy 
            fill the air and the community comes together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {upcomingPerformers.map((performer, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-2 text-giovanni-amber mb-3">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">{performer.date}</span>
              </div>
              <h3 className="font-display text-xl mb-2">{performer.artist}</h3>
              <p className="text-sm opacity-80">{performer.genre}</p>
            </div>
          ))}
        </div>

        <div className="bg-giovanni-terracotta/20 backdrop-blur-sm rounded-xl p-8 border border-giovanni-terracotta/30 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Clock className="w-8 h-8 mx-auto mb-2 text-giovanni-amber" />
              <h3 className="font-semibold mb-1">Performance Time</h3>
              <p className="text-sm opacity-80">7:00 PM - 10:00 PM</p>
            </div>
            <div>
              <Music className="w-8 h-8 mx-auto mb-2 text-giovanni-amber" />
              <h3 className="font-semibold mb-1">Special Menu</h3>
              <p className="text-sm opacity-80">Live music dinner specials</p>
            </div>
            <div>
              <Calendar className="w-8 h-8 mx-auto mb-2 text-giovanni-amber" />
              <h3 className="font-semibold mb-1">Reservations</h3>
              <p className="text-sm opacity-80">Book early - fills fast!</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/reservations?event=thursday-music" className="btn bg-giovanni-amber hover:bg-giovanni-amber-dark text-giovanni-charcoal">
              Reserve for Thursday Night
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}