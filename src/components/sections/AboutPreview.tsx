import Link from 'next/link'
import { Clock, Users, Award, Heart } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl md:text-5xl text-giovanni-blue mb-6">
              A Taste of Trieste in Every Bite
            </h2>
            <p className="text-lg text-giovanni-charcoal/70 mb-6">
              Giovanni's brings the authentic flavors of Trieste to your table. Our story began in 1952 when 
              Giovanni Rossi left the cobblestone streets of Trieste with his grandmother's recipes and a dream 
              of sharing his hometown's unique cuisine with the world.
            </p>
            <p className="text-lg text-giovanni-charcoal/70 mb-8">
              Today, we continue his legacy, serving traditional dishes that reflect Trieste's rich history as a 
              melting pot of Italian, Austrian, and Slavic cultures. Every meal is prepared with the same love 
              and attention that Nonna Rossi put into her cooking.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-giovanni-terracotta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-giovanni-charcoal mb-1">Family Tradition</h3>
                  <p className="text-sm text-giovanni-charcoal/60">Over 70 years of authentic recipes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-giovanni-terracotta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-giovanni-charcoal mb-1">Community First</h3>
                  <p className="text-sm text-giovanni-charcoal/60">Where friends become family</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-giovanni-terracotta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-giovanni-charcoal mb-1">Award Winning</h3>
                  <p className="text-sm text-giovanni-charcoal/60">Best Italian Restaurant 2023</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-giovanni-terracotta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-giovanni-charcoal mb-1">Made with Love</h3>
                  <p className="text-sm text-giovanni-charcoal/60">Every dish tells a story</p>
                </div>
              </div>
            </div>
            
            <Link href="/story" className="btn btn-outline">
              Read Our Full Story
            </Link>
          </div>
          
          {/* Image Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 bg-giovanni-blue/10 rounded-lg flex items-center justify-center">
                <span className="text-giovanni-blue/30 text-sm">Giovanni Portrait</span>
              </div>
              <div className="h-32 bg-giovanni-terracotta/10 rounded-lg flex items-center justify-center">
                <span className="text-giovanni-terracotta/30 text-sm">Kitchen Team</span>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="h-32 bg-giovanni-amber/10 rounded-lg flex items-center justify-center">
                <span className="text-giovanni-amber/60 text-sm">Original Recipe Book</span>
              </div>
              <div className="h-48 bg-giovanni-blue/10 rounded-lg flex items-center justify-center">
                <span className="text-giovanni-blue/30 text-sm">Trieste Harbor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}