"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, 
  Menu, 
  X, 
  User, 
  LogOut, 
  Trophy, 
  BookOpen, 
  BarChart3,
  Brain,
  Users,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface NavbarProps {
  user?: {
    name: string
    image?: string
    role: string
  }
}

export function Navbar({ user }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/tests', label: 'Tests', icon: Brain },
    { href: '/practice', label: 'Practice', icon: BookOpen },
    { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
    { href: '/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/materials', label: 'Materials', icon: BookOpen },
    { href: '/discussions', label: 'Discussions', icon: MessageSquare },
  ]

  const adminItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: BarChart3 },
    { href: '/admin/tests', label: 'Manage Tests', icon: Brain },
    { href: '/admin/users', label: 'Users', icon: Users },
    { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'cyber-glass backdrop-blur-lg border-b border-neon-blue/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Zap className="h-8 w-8 text-neon-blue" />
              <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-md animate-pulse" />
            </motion.div>
            <span className="text-xl font-bold text-gradient group-hover:glow-text transition-all duration-300">
              TestSeries Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-neon-blue/10"
              >
                <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-neon-blue transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-neon-blue transition-colors">
                  {item.label}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Admin Navigation */}
            {user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN' && (
              <div className="flex items-center space-x-4 pl-4 border-l border-cyber-light/30">
                {adminItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative group flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-neon-purple/10"
                  >
                    <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-neon-purple transition-colors" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-neon-purple transition-colors">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* User Menu / Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Badge variant="neon" className="animate-pulse">
                  {user.role}
                </Badge>
                <div className="flex items-center space-x-2 cyber-card px-3 py-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-sm font-medium text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-destructive/10 hover:border-destructive/50"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="outline" asChild>
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button variant="neon" asChild>
                  <Link href="/auth/register">Get Started</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden cyber-glass backdrop-blur-lg border-t border-neon-blue/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg cyber-card hover:bg-neon-blue/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 text-neon-blue" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              {user ? (
                <div className="border-t border-cyber-light/30 pt-4 space-y-3">
                  <div className="flex items-center space-x-3 px-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{user.name}</p>
                      <Badge variant="neon" className="text-xs">
                        {user.role}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="destructive" className="w-full">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="border-t border-cyber-light/30 pt-4 space-y-3">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/auth/login">Sign In</Link>
                  </Button>
                  <Button variant="neon" className="w-full" asChild>
                    <Link href="/auth/register">Get Started</Link>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}