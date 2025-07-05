"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Users, 
  Brain, 
  Trophy, 
  Sparkles,
  Clock,
  Shield,
  Rocket,
  Star,
  CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced AI algorithms analyze your performance and provide personalized insights for improvement.",
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      icon: Target,
      title: "Adaptive Testing",
      description: "Dynamic difficulty adjustment based on your performance to optimize learning efficiency.",
      gradient: "from-neon-purple to-neon-pink"
    },
    {
      icon: TrendingUp,
      title: "Real-time Progress",
      description: "Track your improvement with detailed analytics and performance metrics in real-time.",
      gradient: "from-neon-pink to-neon-green"
    },
    {
      icon: Trophy,
      title: "Competitive Rankings",
      description: "Compare your performance with peers through comprehensive leaderboards and rankings.",
      gradient: "from-neon-green to-neon-blue"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Take tests on your schedule with support for both live and practice modes.",
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security ensures your data and test integrity are always protected.",
      gradient: "from-neon-purple to-neon-pink"
    }
  ]

  const stats = [
    { value: "10K+", label: "Active Students", icon: Users },
    { value: "500+", label: "Practice Tests", icon: Brain },
    { value: "95%", label: "Success Rate", icon: Trophy },
    { value: "24/7", label: "Support", icon: Shield }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "JEE Aspirant",
      content: "The AI-powered analytics helped me identify my weak areas and improve my score by 40%!",
      rating: 5
    },
    {
      name: "Arjun Patel",
      role: "CAT Candidate",
      content: "Best test series platform I've used. The interface is intuitive and the questions are top-notch.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "NEET Aspirant",
      content: "The adaptive testing feature is incredible. It challenges me just right every time.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-30" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-neon-blue/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-neon-purple/20 rounded-full blur-xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Badge variant="neon" className="mb-4 animate-pulse">
                <Sparkles className="w-3 h-3 mr-1" />
                Next-Gen Test Platform
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient glow-text">
                  Future of
                </span>
                <br />
                <span className="text-white">
                  Competitive Testing
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Experience the most advanced test series platform with AI-powered analytics, 
                adaptive testing, and futuristic design for optimal exam preparation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="xl" variant="neon" className="group" asChild>
                <Link href="/auth/register">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button size="xl" variant="outline" asChild>
                <Link href="/tests">
                  Explore Tests
                </Link>
              </Button>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="cyber" className="mb-4">
              <Rocket className="w-3 h-3 mr-1" />
              Advanced Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Revolutionary</span> Learning Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology meets intuitive design to create the ultimate test preparation platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl hover:shadow-neon-blue/10 transition-all duration-300">
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-cyber-dark/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="glow" className="mb-4">
              <Star className="w-3 h-3 mr-1" />
              Student Success
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Students <span className="text-gradient">Love</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of successful students who achieved their dreams with our platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg mb-4 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gradient">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the future of competitive exam preparation with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="xl" variant="glow" className="group" asChild>
                <Link href="/auth/register">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button size="xl" variant="outline" asChild>
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              🚀 Free trial • No credit card required • Cancel anytime
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
