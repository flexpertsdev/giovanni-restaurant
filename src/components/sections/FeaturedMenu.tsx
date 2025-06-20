import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredDishes = [
  {
    id: 1,
    name: 'Goulash Triestino',
    description: 'Traditional beef stew with paprika, served with polenta - a perfect blend of Italian and Austro-Hungarian influences',
    price: '$24',
    image: '/images/goulash.jpg',
    category: 'Secondi'
  },
  {
    id: 2,
    name: 'Sardoni in Savor',
    description: 'Marinated sardines with onions and vinegar, a classic Trieste antipasto from our fishing heritage',
    price: '$16',
    image: '/images/sardoni.jpg',
    category: 'Antipasti'
  },
  {
    id: 3,
    name: 'Jota Triestina',
    description: 'Hearty soup with beans, sauerkraut, potatoes, and smoked pork - comfort food from the Carso',
    price: '$18',
    image: '/images/jota.jpg',
    category: 'Primi'
  },
  {
    id: 4,
    name: 'Presnitz',
    description: 'Traditional spiral pastry filled with walnuts, raisins, and pine nuts - a sweet ending from Trieste',
    price: '$12',
    image: '/images/presnitz.jpg',
    category: 'Dolci'
  }
]

export default function FeaturedMenu() {
  return (
    <section className="section bg-giovanni-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl text-giovanni-blue mb-4">
            Signature Dishes
          </h2>
          <p className="text-lg text-giovanni-charcoal/70 max-w-2xl mx-auto">
            From the Adriatic Sea to the Carso plateau, our menu celebrates the unique culinary heritage of Trieste
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="card group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-giovanni-blue/10">
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-giovanni-blue/30 text-sm">Image: {dish.image}</span>
                </div>
                <div className="absolute top-2 right-2 bg-giovanni-terracotta text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {dish.category}
                </div>
              </div>
              
              <h3 className="font-display text-xl text-giovanni-charcoal mb-2 group-hover:text-giovanni-terracotta transition-colors">
                {dish.name}
              </h3>
              <p className="text-sm text-giovanni-charcoal/60 mb-4 line-clamp-3">
                {dish.description}
              </p>
              <p className="text-2xl font-bold text-giovanni-amber">
                {dish.price}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/menu" className="btn btn-primary inline-flex items-center">
            View Full Menu
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}