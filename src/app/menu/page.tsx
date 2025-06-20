'use client'

import { useState } from 'react'
import { Leaf, Fish, Wheat } from 'lucide-react'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  dietary?: ('vegetarian' | 'gluten-free' | 'seafood')[]
}

const menuItems: MenuItem[] = [
  // Antipasti
  {
    id: 1,
    name: 'Sardoni in Savor',
    description: 'Marinated sardines with onions and vinegar, a classic Trieste antipasto',
    price: '$16',
    category: 'Antipasti',
    dietary: ['seafood']
  },
  {
    id: 2,
    name: 'Capesante Gratinate',
    description: 'Baked scallops with breadcrumbs, garlic, and parsley',
    price: '$22',
    category: 'Antipasti',
    dietary: ['seafood']
  },
  {
    id: 3,
    name: 'Antipasto Misto Triestino',
    description: 'Selection of local cured meats, cheeses, and pickled vegetables',
    price: '$24',
    category: 'Antipasti'
  },
  {
    id: 4,
    name: 'Verdure Grigliate',
    description: 'Grilled seasonal vegetables with extra virgin olive oil',
    price: '$14',
    category: 'Antipasti',
    dietary: ['vegetarian', 'gluten-free']
  },
  
  // Primi
  {
    id: 5,
    name: 'Jota Triestina',
    description: 'Traditional soup with beans, sauerkraut, potatoes, and smoked pork',
    price: '$18',
    category: 'Primi',
    dietary: ['gluten-free']
  },
  {
    id: 6,
    name: 'Gnochi de Susini',
    description: 'Potato dumplings filled with plums, a sweet-savory Trieste specialty',
    price: '$20',
    category: 'Primi',
    dietary: ['vegetarian']
  },
  {
    id: 7,
    name: 'Pasta e Fasioi',
    description: 'Hearty pasta and bean soup, Trieste style with a touch of paprika',
    price: '$16',
    category: 'Primi'
  },
  {
    id: 8,
    name: 'Risotto ai Frutti di Mare',
    description: 'Creamy risotto with fresh Adriatic seafood',
    price: '$28',
    category: 'Primi',
    dietary: ['seafood', 'gluten-free']
  },
  
  // Secondi
  {
    id: 9,
    name: 'Goulash Triestino',
    description: 'Beef stew with paprika and onions, served with polenta',
    price: '$24',
    category: 'Secondi',
    dietary: ['gluten-free']
  },
  {
    id: 10,
    name: 'Boreto alla Graisana',
    description: 'Traditional fish stew from Grado, served with white polenta',
    price: '$30',
    category: 'Secondi',
    dietary: ['seafood', 'gluten-free']
  },
  {
    id: 11,
    name: 'Cevapcici con Ajvar',
    description: 'Grilled meat rolls with roasted pepper sauce, showing our Balkan influence',
    price: '$22',
    category: 'Secondi'
  },
  {
    id: 12,
    name: 'Melanzane alla Parmigiana',
    description: 'Layers of eggplant with tomato sauce and mozzarella',
    price: '$20',
    category: 'Secondi',
    dietary: ['vegetarian']
  },
  
  // Dolci
  {
    id: 13,
    name: 'Presnitz',
    description: 'Traditional spiral pastry with walnuts, raisins, and pine nuts',
    price: '$12',
    category: 'Dolci',
    dietary: ['vegetarian']
  },
  {
    id: 14,
    name: 'Putizza',
    description: 'Sweet bread roll filled with walnuts, chocolate, and dried fruit',
    price: '$10',
    category: 'Dolci',
    dietary: ['vegetarian']
  },
  {
    id: 15,
    name: 'Sachertorte',
    description: 'Classic Austrian chocolate cake with apricot jam',
    price: '$12',
    category: 'Dolci',
    dietary: ['vegetarian']
  },
  {
    id: 16,
    name: 'Strucolo de Pomi',
    description: 'Apple strudel served warm with vanilla sauce',
    price: '$10',
    category: 'Dolci',
    dietary: ['vegetarian']
  }
]

const categories = ['All', 'Antipasti', 'Primi', 'Secondi', 'Dolci']

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [dietaryFilter, setDietaryFilter] = useState<string[]>([])

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory
    const dietaryMatch = dietaryFilter.length === 0 || 
      dietaryFilter.every(filter => item.dietary?.includes(filter as any))
    return categoryMatch && dietaryMatch
  })

  const toggleDietaryFilter = (filter: string) => {
    setDietaryFilter(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  return (
    <div className="min-h-screen bg-giovanni-cream">
      {/* Header */}
      <section className="bg-giovanni-blue text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-4">Our Menu</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            A culinary journey through Trieste, where Italian tradition meets 
            Central European influences
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 md:top-24 z-20 bg-white shadow-md">
        <div className="container-custom py-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-giovanni-blue text-white'
                    : 'bg-giovanni-cream text-giovanni-charcoal hover:bg-giovanni-blue/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Dietary Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => toggleDietaryFilter('vegetarian')}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm transition-colors ${
                dietaryFilter.includes('vegetarian')
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Leaf className="w-4 h-4" />
              <span>Vegetarian</span>
            </button>
            <button
              onClick={() => toggleDietaryFilter('gluten-free')}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm transition-colors ${
                dietaryFilter.includes('gluten-free')
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Wheat className="w-4 h-4" />
              <span>Gluten-Free</span>
            </button>
            <button
              onClick={() => toggleDietaryFilter('seafood')}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm transition-colors ${
                dietaryFilter.includes('seafood')
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Fish className="w-4 h-4" />
              <span>Seafood</span>
            </button>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-giovanni-charcoal">{item.name}</h3>
                  <span className="text-2xl font-bold text-giovanni-amber ml-4">{item.price}</span>
                </div>
                <p className="text-giovanni-charcoal/70 mb-3">{item.description}</p>
                {item.dietary && (
                  <div className="flex gap-2">
                    {item.dietary.includes('vegetarian') && (
                      <span className="inline-flex items-center space-x-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        <Leaf className="w-3 h-3" />
                        <span>Vegetarian</span>
                      </span>
                    )}
                    {item.dietary.includes('gluten-free') && (
                      <span className="inline-flex items-center space-x-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                        <Wheat className="w-3 h-3" />
                        <span>Gluten-Free</span>
                      </span>
                    )}
                    {item.dietary.includes('seafood') && (
                      <span className="inline-flex items-center space-x-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        <Fish className="w-3 h-3" />
                        <span>Seafood</span>
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-giovanni-charcoal/60">No items match your selected filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}