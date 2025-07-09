import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Award, Leaf, TrendingUp, BarChart3, PieChart, Activity, Target, Calendar, Share2, Download, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from 'react-router-dom'
import { SimpleChart } from '@/components/ui/custom-charts'

interface Achievement {
  id: string
  name: string
  description: string
  progress: number
  maxProgress: number
  icon: string
  unlocked: boolean
}

interface SwapActivity {
  id: string
  productFrom: string
  productTo: string
  creditsEarned: number
  date: string
  category: string
}

const mockAchievements: Achievement[] = [
  {
    id: 'first-swap',
    name: 'First Swap',
    description: 'Complete your first eco-friendly swap',
    progress: 1,
    maxProgress: 1,
    icon: '🌱',
    unlocked: true
  },
  {
    id: 'hundred-credits',
    name: 'Credit Collector',
    description: 'Earn 100 green credits',
    progress: 150,
    maxProgress: 100,
    icon: '💚',
    unlocked: true
  },
  {
    id: 'eco-warrior',
    name: 'Eco Warrior',
    description: 'Complete 25 swaps',
    progress: 12,
    maxProgress: 25,
    icon: '⚔️',
    unlocked: false
  },
  {
    id: 'tree-hugger',
    name: 'Tree Hugger',
    description: 'Save equivalent of 5 trees',
    progress: 3,
    maxProgress: 5,
    icon: '🌳',
    unlocked: false
  }
]

const mockRecentActivity: SwapActivity[] = [
  {
    id: '1',
    productFrom: 'Plastic Cups',
    productTo: 'Bamboo Cups',
    creditsEarned: 25,
    date: '2024-01-15',
    category: 'Kitchen'
  },
  {
    id: '2',
    productFrom: 'Paper Towels',
    productTo: 'Bamboo Towels',
    creditsEarned: 20,
    date: '2024-01-14',
    category: 'Home'
  },
  {
    id: '3',
    productFrom: 'Chemical Detergent',
    productTo: 'Natural Detergent',
    creditsEarned: 30,
    date: '2024-01-13',
    category: 'Home'
  }
]

const categoryData = [
  { name: 'Kitchen', value: 45, color: 'hsl(142, 76%, 36%)' },
  { name: 'Personal Care', value: 25, color: 'hsl(158, 64%, 52%)' },
  { name: 'Home', value: 20, color: 'hsl(173, 58%, 39%)' },
  { name: 'Office', value: 10, color: 'hsl(197, 37%, 24%)' }
]

const monthlyData = [
  { name: 'Jul', value: 20 },
  { name: 'Aug', value: 35 },
  { name: 'Sep', value: 45 },
  { name: 'Oct', value: 30 },
  { name: 'Nov', value: 55 },
  { name: 'Dec', value: 75 },
  { name: 'Jan', value: 150 }
]

const topSwapsData = [
  { name: 'Bamboo Products', value: 85 },
  { name: 'Natural Cleaners', value: 65 },
  { name: 'Reusable Items', value: 50 },
  { name: 'Organic Food', value: 35 },
  { name: 'Solar Products', value: 25 }
]

export default function Dashboard() {
  const [greenCredits, setGreenCredits] = useState(150)
  const [totalCreditsThisMonth, setTotalCreditsThisMonth] = useState(75)
  const [totalCreditsThisWeek, setTotalCreditsThisWeek] = useState(45)
  const [animatedCredits, setAnimatedCredits] = useState(0)

  // Animate credits counter
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedCredits(prev => {
        if (prev < greenCredits) {
          return Math.min(prev + 5, greenCredits)
        }
        clearInterval(timer)
        return prev
      })
    }, 50)

    return () => clearInterval(timer)
  }, [greenCredits])

  const environmentalImpact = {
    plasticBottlesSaved: 47,
    treesWorthCO2: 2.3,
    waterConserved: 125
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
              <Link to="/search" className="hover:text-primary transition-colors">
                Product Search
              </Link>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Your Environmental Impact Journey</h1>
          <p className="text-xl text-muted-foreground">Track your progress towards a more sustainable lifestyle</p>
        </motion.div>

        {/* Credits Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Award className="w-8 h-8 text-primary" />
                    <span className="text-lg font-medium text-muted-foreground">Green Credits Balance</span>
                  </div>
                  <div className="text-6xl font-bold text-primary mb-4">
                    {animatedCredits.toLocaleString()}
                  </div>
                  <div className="flex space-x-6 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium">This Month:</span> +{totalCreditsThisMonth}
                    </div>
                    <div>
                      <span className="font-medium">This Week:</span> +{totalCreditsThisWeek}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Impact
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Dashboard Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Swaps</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Credits This Month</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">75</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Environmental Score</CardTitle>
                  <Leaf className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.4</div>
                  <p className="text-xs text-muted-foreground">Excellent impact</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Streak</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">days in a row</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="w-5 h-5" />
                    <span>Credits by Category</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SimpleChart data={categoryData} type="pie" height={250} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5" />
                    <span>Monthly Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SimpleChart data={monthlyData} type="line" height={250} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Swaps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium">{activity.productFrom}</span>
                          <span className="text-muted-foreground">→</span>
                          <span className="font-medium text-primary">{activity.productTo}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{activity.date}</span>
                          <Badge variant="outline">{activity.category}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">+{activity.creditsEarned}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockAchievements.map((achievement) => (
                <Card key={achievement.id} className={achievement.unlocked ? 'border-primary/50' : 'opacity-60'}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{achievement.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{Math.min(achievement.progress, achievement.maxProgress)}/{achievement.maxProgress}</span>
                          </div>
                          <Progress value={(Math.min(achievement.progress, achievement.maxProgress) / achievement.maxProgress) * 100} />
                        </div>
                        {achievement.unlocked && (
                          <Badge className="mt-2">Unlocked!</Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            {/* Environmental Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">🌊</div>
                  <div className="text-3xl font-bold text-primary mb-1">{environmentalImpact.plasticBottlesSaved}</div>
                  <p className="text-sm text-muted-foreground">Plastic bottles saved from oceans</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">🌳</div>
                  <div className="text-3xl font-bold text-primary mb-1">{environmentalImpact.treesWorthCO2}</div>
                  <p className="text-sm text-muted-foreground">Trees worth of CO2 reduced</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">💧</div>
                  <div className="text-3xl font-bold text-primary mb-1">{environmentalImpact.waterConserved}</div>
                  <p className="text-sm text-muted-foreground">Gallons of water conserved</p>
                </CardContent>
              </Card>
            </div>

            {/* Top Swaps Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Top 5 Eco Swaps Made</CardTitle>
              </CardHeader>
              <CardContent>
                <SimpleChart data={topSwapsData} type="bar" height={300} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}