import { Quote } from 'lucide-react'

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-giovanni-blue/10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50" />
        <div className="relative z-10 text-center container-custom">
          <h1 className="font-display text-4xl md:text-6xl text-giovanni-blue mb-4">Our Story</h1>
          <p className="text-lg text-giovanni-charcoal/80 max-w-2xl mx-auto">
            Three generations of passion, tradition, and the flavors of Trieste
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container-custom max-w-4xl">
          {/* 1952 - The Beginning */}
          <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-giovanni-blue/20">
            <div className="absolute left-0 top-0 w-4 h-4 bg-giovanni-blue rounded-full transform -translate-x-1/2" />
            <div className="ml-8">
              <span className="text-giovanni-terracotta font-bold text-lg">1952</span>
              <h2 className="font-display text-2xl md:text-3xl text-giovanni-charcoal mt-2 mb-4">
                The Journey Begins
              </h2>
              <p className="text-giovanni-charcoal/70 mb-4">
                Giovanni Rossi, a young chef from Trieste, arrived in America with nothing but 
                a suitcase full of dreams and his grandmother's handwritten recipes. Growing up 
                in the bustling port city of Trieste, where Italian, Austrian, and Slavic cultures 
                merged at every corner café, Giovanni learned that food was more than sustenance—it 
                was a bridge between cultures and hearts.
              </p>
              <p className="text-giovanni-charcoal/70">
                He started with a small trattoria, serving the dishes of his childhood: the hearty 
                Jota soup that warmed winter evenings, the delicate Sardoni in Savor his mother 
                prepared for special occasions, and the Presnitz pastry that reminded him of Sunday 
                mornings at the Trieste harbor.
              </p>
            </div>
          </div>

          {/* 1975 - Family Tradition */}
          <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-giovanni-blue/20">
            <div className="absolute left-0 top-0 w-4 h-4 bg-giovanni-blue rounded-full transform -translate-x-1/2" />
            <div className="ml-8">
              <span className="text-giovanni-terracotta font-bold text-lg">1975</span>
              <h2 className="font-display text-2xl md:text-3xl text-giovanni-charcoal mt-2 mb-4">
                A Family Affair
              </h2>
              <p className="text-giovanni-charcoal/70 mb-4">
                Giovanni's son, Marco, joined the restaurant after studying culinary arts in both 
                Italy and Austria. He brought new techniques while honoring the traditional recipes. 
                Together, they expanded the menu to include more dishes from the Carso plateau and 
                the Adriatic coast, always maintaining the authentic flavors that made Giovanni's special.
              </p>
              <blockquote className="relative bg-giovanni-cream p-6 rounded-lg my-6">
                <Quote className="w-8 h-8 text-giovanni-blue/20 mb-2" />
                <p className="text-giovanni-charcoal italic">
                  "In Trieste, we say 'No xe bon el vin se no xe in compagnia' - Wine is only good 
                  in good company. This is the heart of our restaurant: bringing people together."
                </p>
                <footer className="text-sm text-giovanni-charcoal/60 mt-2">
                  — Giovanni Rossi, Founder
                </footer>
              </blockquote>
            </div>
          </div>

          {/* 1990 - Thursday Music Nights */}
          <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-giovanni-blue/20">
            <div className="absolute left-0 top-0 w-4 h-4 bg-giovanni-blue rounded-full transform -translate-x-1/2" />
            <div className="ml-8">
              <span className="text-giovanni-terracotta font-bold text-lg">1990</span>
              <h2 className="font-display text-2xl md:text-3xl text-giovanni-charcoal mt-2 mb-4">
                Music Fills the Air
              </h2>
              <p className="text-giovanni-charcoal/70">
                Inspired by the vibrant café culture of Trieste, where writers, artists, and musicians 
                gathered, Marco introduced Thursday Live Music Nights. What started as a small gathering 
                of local musicians has become a beloved tradition, featuring everything from traditional 
                Italian folk music to jazz interpretations of classic Triestine songs.
              </p>
            </div>
          </div>

          {/* 2020 - Third Generation */}
          <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-giovanni-blue/20">
            <div className="absolute left-0 top-0 w-4 h-4 bg-giovanni-blue rounded-full transform -translate-x-1/2" />
            <div className="ml-8">
              <span className="text-giovanni-terracotta font-bold text-lg">2020</span>
              <h2 className="font-display text-2xl md:text-3xl text-giovanni-charcoal mt-2 mb-4">
                New Generation, Same Heart
              </h2>
              <p className="text-giovanni-charcoal/70 mb-4">
                Giovanni III, trained at the finest culinary institutes in Trieste and Vienna, now 
                leads the kitchen. While embracing modern techniques and presentation, he remains 
                committed to the authentic flavors and warm hospitality that have defined Giovanni's 
                for over 70 years.
              </p>
              <p className="text-giovanni-charcoal/70">
                "My grandfather taught me that every dish tells a story," says Giovanni III. "When 
                you taste our Goulash Triestino, you're experiencing centuries of history—the 
                Austro-Hungarian influence on our Italian port city. Our menu is a love letter to Trieste."
              </p>
            </div>
          </div>

          {/* Today */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-0 top-0 w-4 h-4 bg-giovanni-amber rounded-full transform -translate-x-1/2 ring-4 ring-giovanni-amber/20" />
            <div className="ml-8">
              <span className="text-giovanni-terracotta font-bold text-lg">Today</span>
              <h2 className="font-display text-2xl md:text-3xl text-giovanni-charcoal mt-2 mb-4">
                Where Tradition Lives On
              </h2>
              <p className="text-giovanni-charcoal/70 mb-6">
                Giovanni's remains a family-owned testament to the power of good food and warm 
                hospitality. We continue to source ingredients from trusted suppliers, many of 
                whom have been with us for decades. Our pasta is still made fresh daily, our 
                sauces simmer for hours, and every dish is prepared with the same care as if 
                we were cooking for our own family—because to us, you are family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-giovanni-cream">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-center text-giovanni-blue mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-giovanni-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇮🇹</span>
              </div>
              <h3 className="font-display text-xl text-giovanni-charcoal mb-2">Authenticity</h3>
              <p className="text-giovanni-charcoal/70">
                Every recipe honors the traditional methods passed down through generations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-giovanni-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="font-display text-xl text-giovanni-charcoal mb-2">Community</h3>
              <p className="text-giovanni-charcoal/70">
                We believe in the power of gathering around good food and creating memories
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-giovanni-amber/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="font-display text-xl text-giovanni-charcoal mb-2">Passion</h3>
              <p className="text-giovanni-charcoal/70">
                Every dish is crafted with love, from our family to yours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl text-giovanni-blue mb-4">
            Become Part of Our Story
          </h2>
          <p className="text-lg text-giovanni-charcoal/70 mb-8 max-w-2xl mx-auto">
            Join us for an evening where every meal is a celebration and every guest becomes family
          </p>
          <a href="/reservations" className="btn btn-primary">
            Reserve Your Table
          </a>
        </div>
      </section>
    </div>
  )
}