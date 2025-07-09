import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingCart, User, Mic, Shuffle, Filter, Star, Leaf, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'

interface Product {
  id: string
  name: string
  brand?: string
  price: number
  image: string
  sustainabilityScore: number
  greenCredits: number
  ecoBenefits: string[]
  carbonFootprint: number
  decompositionTime: string
  recyclability: number
}

interface OriginalProduct {
  id: string
  name: string
  price: number
  image: string
  environmentalScore: number
  concerns: string[]
}

// Mock data for demonstration
const mockOriginalProduct: OriginalProduct = {
  id: 'plastic-cups',
  name: 'Disposable Plastic Cups (50 pack)',
  price: 8.99,
  image: '/placeholder.svg?height=200&width=200',
  environmentalScore: 2,
  concerns: ['Non-biodegradable', 'Ocean pollution', 'Microplastics', 'Petroleum-based']
}

const mockAlternatives: Product[] = [
  {
    id: 'bamboo-cups',
    name: 'Bamboo Fiber Cups (50 pack)',
    brand: 'EcoWare',
    price: 12.99,
    image: '/placeholder.svg?height=200&width=200',
    sustainabilityScore: 9,
    greenCredits: 25,
    ecoBenefits: ['Biodegradable', 'Renewable bamboo', 'Compostable', 'Chemical-free'],
    carbonFootprint: 0.8,
    decompositionTime: '90 days',
    recyclability: 95
  },
  {
    id: 'paper-cups',
    name: 'Recycled Paper Cups (50 pack)',
    brand: 'GreenChoice',
    price: 10.49,
    image: '/placeholder.svg?height=200&width=200',
    sustainabilityScore: 8,
    greenCredits: 20,
    ecoBenefits: ['Recyclable', 'Post-consumer content', 'Forest Stewardship Council certified'],
    carbonFootprint: 1.2,
    decompositionTime: '60 days',
    recyclability: 90
  }
]

const trendingSwaps = [
  'Plastic bags → Reusable cotton bags',
  'Paper towels → Bamboo towels',
  'Plastic straws → Metal straws',
  'Chemical detergent → Natural detergent'
]

const categories = [
  { name: 'Kitchen', icon: '🍽️' },
  { name: 'Personal Care', icon: '🧴' },
  { name: 'Home', icon: '🏠' },
  { name: 'Office', icon: '📎' }
]

const typingWords = ['plastic cups', 'paper towels', 'detergent', 'shampoo', 'cleaning supplies']

export default function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<{ original: OriginalProduct | null; alternatives: Product[] }>({
    original: null,
    alternatives: []
  })
  const [greenCredits, setGreenCredits] = useState(150)
  const [cartItems, setCartItems] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const [currentTypingWord, setCurrentTypingWord] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const { toast } = useToast()

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return

    const currentWord = typingWords[currentTypingWord]
    const isDeleting = displayedText.length > currentWord.length

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1))
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1))
      }

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsTyping(true), 1500)
        setCurrentTypingWord((prev) => (prev + 1) % typingWords.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, currentTypingWord, isTyping])

  const handleSearch = async () => {
    if (!searchQuery.trim()) return
    
    setIsSearching(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSearchResults({
      original: mockOriginalProduct,
      alternatives: mockAlternatives
    })
    setIsSearching(false)
  }

  const handleSwap = (product: Product) => {
    setGreenCredits(prev => prev + product.greenCredits)
    setCartItems(prev => prev + 1)
    toast({
      title: "Great choice! 🌱",
      description: `You earned ${product.greenCredits} Green Credits!`,
    })
  }

  const ProductCard = ({ product, isOriginal = false }: { product: Product | OriginalProduct, isOriginal?: boolean }) => {
    if (isOriginal) {
      const original = product as OriginalProduct
      return (
        <Card className="overflow-hidden border-destructive/20">
          <CardContent className="p-6">
            <div className="relative mb-4">
              <img src={original.image} alt={original.name} className="w-full h-48 object-cover rounded-lg" />
              <Badge variant="destructive" className="absolute top-2 right-2">
                Environmental Score: {original.environmentalScore}/10
              </Badge>
            </div>
            <h3 className="font-semibold text-lg mb-2">{original.name}</h3>
            <p className="text-2xl font-bold text-primary mb-4">${original.price}</p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-destructive">Environmental Concerns:</p>
              <div className="flex flex-wrap gap-1">
                {original.concerns.map((concern, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-destructive text-destructive">
                    {concern}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }

    const eco = product as Product
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-colors">
          <CardContent className="p-6">
            <div className="relative mb-4">
              <img src={eco.image} alt={eco.name} className="w-full h-48 object-cover rounded-lg" />
              <Badge className="absolute top-2 right-2 bg-primary">
                {eco.sustainabilityScore}/10 <Star className="w-3 h-3 ml-1" />
              </Badge>
            </div>
            <h3 className="font-semibold text-lg mb-1">{eco.name}</h3>
            {eco.brand && <p className="text-muted-foreground text-sm mb-2">{eco.brand}</p>}
            
            <div className="flex items-center justify-between mb-3">
              <p className="text-2xl font-bold text-primary">${eco.price}</p>
              <div className="flex items-center gap-1 text-primary">
                <Award className="w-4 h-4" />
                <span className="font-medium">+{eco.greenCredits} credits</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Sustainability Score</span>
                  <span>{eco.sustainabilityScore}/10</span>
                </div>
                <Progress value={eco.sustainabilityScore * 10} className="h-2" />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium text-primary">Eco Benefits:</p>
                <div className="flex flex-wrap gap-1">
                  {eco.ecoBenefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => handleSwap(eco)} className="flex-1">
                  <Leaf className="w-4 h-4 mr-2" />
                  Swap This
                </Button>
                <Button variant="outline" size="sm">
                  Compare Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">EcoSwap</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-primary">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Green Credits: {greenCredits}</span>
              </div>
              
              <Link to="/dashboard" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <User className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Section */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Find Your Eco Alternative
          </motion.h1>
          
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder={`Search for any product (e.g., ${displayedText}|)`}
                className="pl-12 pr-24 py-6 text-lg rounded-full border-2 border-primary/20 focus:border-primary"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
                <Button size="sm" variant="ghost" className="rounded-full">
                  <Mic className="w-4 h-4" />
                </Button>
                <Button onClick={handleSearch} size="sm" className="rounded-full" disabled={isSearching}>
                  {isSearching ? 'Searching...' : 'Search'}
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" className="rounded-full">
              <Shuffle className="w-4 h-4 mr-2" />
              Surprise Me
            </Button>
            <Button variant="outline" className="rounded-full">
              <Filter className="w-4 h-4 mr-2" />
              Filter Results
            </Button>
          </div>
        </div>

        {/* Search Results or Default Content */}
        <AnimatePresence mode="wait">
          {searchResults.original ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Original Product */}
              <div>
                <h2 className="text-2xl font-bold mb-4">What you searched for:</h2>
                <div className="max-w-md">
                  <ProductCard product={searchResults.original} isOriginal />
                </div>
              </div>

              <Separator />

              {/* Alternatives */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  We found {searchResults.alternatives.length} eco-friendly alternatives
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.alternatives.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* Welcome Message */}
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Discover Eco-Friendly Alternatives</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Search for any product and we'll show you sustainable alternatives that are better for the planet
                </p>
              </div>

              {/* Trending Swaps */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Trending Swaps</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {trendingSwaps.map((swap, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer"
                    >
                      <p className="font-medium">{swap}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Category Quick Links */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Shop by Category</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map((category) => (
                    <motion.div
                      key={category.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-6 text-center rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer"
                    >
                      <div className="text-4xl mb-2">{category.icon}</div>
                      <p className="font-medium">{category.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}