"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Brain,
  Zap,
  Globe,
  TrendingUp,
  Shield,
  Code,
  ChevronRight,
  Check,
  Star,
  Menu,
  X,
  Sun,
  Moon,
  BarChart3,
  Sparkles,
  Cpu,
  Database,
  LineChart,
} from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function GenelineXWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [hoveredGrid, setHoveredGrid] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence that transforms how African businesses operate and scale.",
    },
    {
      icon: Code,
      title: "No-Code Platform",
      description: "Empower anyone to build powerful applications without writing a single line of code.",
    },
    {
      icon: Globe,
      title: "Pan-African Focus",
      description: "Solutions designed specifically for African markets, challenges, and opportunities.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy solutions in minutes, not months. Get to market faster than ever before.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security ensuring your data and applications are always protected.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Solutions that grow with your business, from startup to enterprise scale.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Geneline-X transformed our operations completely. We went from manual processes to AI-driven efficiency in just weeks.",
      author: "Amara Okafor",
      role: "CEO, TechStart Lagos",
      rating: 5,
    },
    {
      quote:
        "The no-code platform allowed our team to build solutions we never thought possible. Game-changing technology.",
      author: "Kwame Asante",
      role: "CTO, Innovation Hub Ghana",
      rating: 5,
    },
    {
      quote:
        "Finally, AI solutions built for Africa, by people who understand our unique challenges and opportunities.",
      author: "Fatima Al-Rashid",
      role: "Director, Cairo Tech Institute",
      rating: 5,
    },
  ]

  const stats = [
    { number: "500+", label: "Businesses Transformed" },
    { number: "50+", label: "African Cities" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ]

  // Enhanced popup data with better dark mode colors
  const popups = [
    {
      id: "ai-models",
      content: "Advanced AI Models",
      icon: <Brain className="w-4 h-4" />,
      position: { top: "25%", left: "5%" },
      delay: "0s",
      color: "cyan",
      darkGlow: "cyan-400",
    },
    {
      id: "data-processing",
      content: "Real-time Data Processing",
      icon: <Database className="w-4 h-4" />,
      position: { top: "30%", right: "5%" },
      delay: "1s",
      color: "violet",
      darkGlow: "violet-400",
    },
    {
      id: "analytics",
      content: "Predictive Analytics",
      icon: <LineChart className="w-4 h-4" />,
      position: { bottom: "10%", left: "50%", transform: "translateX(-50%)" },
      delay: "2s",
      color: "emerald",
      darkGlow: "emerald-400",
    },
    {
      id: "automation",
      content: "Workflow Automation",
      icon: <Cpu className="w-4 h-4" />,
      position: { bottom: "25%", right: "8%" },
      delay: "3s",
      color: "blue",
      darkGlow: "blue-400",
    },
    {
      id: "insights",
      content: "Business Insights",
      icon: <BarChart3 className="w-4 h-4" />,
      position: { bottom: "15%", right: "25%" },
      delay: "4s",
      color: "indigo",
      darkGlow: "indigo-400",
    },
    {
      id: "innovation",
      content: "Continuous Innovation",
      icon: <Sparkles className="w-4 h-4" />,
      position: { top: "40%", left: "2%" },
      delay: "5s",
      color: "amber",
      darkGlow: "amber-400",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/geneline-x-logo.png" alt="Geneline-X Logo" className="w-8 h-8" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                Geneline-X
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="#products"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                Products
              </Link>
              <Link
                href="#research"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                Research
              </Link>
              <Link
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                Contact
              </Link>

              {/* Theme Toggle Button */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}

              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 dark:from-cyan-400 dark:to-blue-500 dark:hover:from-cyan-500 dark:hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 dark:shadow-cyan-400/30">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Theme Toggle Button (Mobile) */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-950/95 border-t border-gray-200 dark:border-gray-800/50 transition-colors duration-300 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-4">
              <Link
                href="#home"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="#products"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                Products
              </Link>
              <Link
                href="#research"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                Research
              </Link>
              <Link
                href="#about"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                Contact
              </Link>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 dark:from-cyan-400 dark:to-blue-500 dark:hover:from-cyan-500 dark:hover:to-blue-600 text-white font-semibold py-2 rounded-lg shadow-lg shadow-cyan-500/25 dark:shadow-cyan-400/30">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Enhanced with dark mode color palette */}
      <section
        id="home"
        className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300"
        onMouseEnter={() => setHoveredGrid(true)}
        onMouseLeave={() => setHoveredGrid(false)}
      >
        {/* Animated Background Patterns Layer 1 - Enhanced for dark mode */}
        <div className="absolute inset-0 opacity-30 dark:opacity-40" aria-hidden="true">
          {/* Large floating circles with enhanced dark mode colors */}
          <div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-cyan-500/20 dark:to-violet-500/20 blur-3xl"
            style={{
              top: "10%",
              left: "5%",
              animation: "floatSlow 25s ease-in-out infinite",
              filter: "blur(3rem) drop-shadow(0 0 40px rgba(6, 182, 212, 0.4))",
            }}
          >
            {/* Enhanced trail effect */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-cyan-400/15 dark:to-violet-400/15 blur-2xl"
              style={{
                animation: "trailLag 25s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            ></div>
          </div>

          <div
            className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-indigo-100/30 to-blue-100/30 dark:from-indigo-500/20 dark:to-blue-500/20 blur-3xl"
            style={{
              top: "60%",
              right: "10%",
              animation: "floatSlow 30s ease-in-out infinite reverse",
              filter: "blur(3rem) drop-shadow(0 0 30px rgba(99, 102, 241, 0.35))",
            }}
          >
            {/* Enhanced trail effect */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/20 dark:from-indigo-400/15 dark:to-blue-400/15 blur-2xl"
              style={{
                animation: "trailLag 30s ease-in-out infinite reverse",
                animationDelay: "0.7s",
              }}
            ></div>
          </div>

          <div
            className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-cyan-100/30 to-teal-100/30 dark:from-emerald-500/20 dark:to-teal-500/20 blur-3xl"
            style={{
              top: "40%",
              left: "70%",
              animation: "floatSlow 35s ease-in-out infinite",
              animationDelay: "5s",
              filter: "blur(3rem) drop-shadow(0 0 25px rgba(16, 185, 129, 0.3))",
            }}
          >
            {/* Enhanced trail effect */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-200/20 to-teal-200/20 dark:from-emerald-400/15 dark:to-teal-400/15 blur-2xl"
              style={{
                animation: "trailLag 35s ease-in-out infinite",
                animationDelay: "5.3s",
              }}
            ></div>
          </div>
        </div>

        {/* Animated Background Patterns Layer 2 - Enhanced morphing shapes */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30" aria-hidden="true">
          {/* Enhanced morphing blob shapes */}
          <div
            className="absolute w-72 h-72 bg-gradient-to-r from-blue-200/40 to-purple-200/40 dark:from-cyan-400/30 dark:to-violet-400/30 blur-2xl"
            style={{
              top: "20%",
              right: "20%",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              animation: "morphBlob 20s ease-in-out infinite",
              filter: "blur(2rem) drop-shadow(0 0 35px rgba(139, 92, 246, 0.3))",
            }}
          >
            {/* Enhanced motion trail */}
            <div
              className="absolute inset-2 bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-cyan-300/20 dark:to-violet-300/20 blur-xl"
              style={{
                borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
                animation: "morphTrail 20s ease-in-out infinite",
                animationDelay: "0.8s",
              }}
            ></div>
          </div>

          <div
            className="absolute w-56 h-56 bg-gradient-to-r from-indigo-200/40 to-cyan-200/40 dark:from-indigo-400/30 dark:to-cyan-400/30 blur-2xl"
            style={{
              bottom: "20%",
              left: "15%",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              animation: "morphBlob 25s ease-in-out infinite reverse",
              animationDelay: "3s",
              filter: "blur(2rem) drop-shadow(0 0 30px rgba(6, 182, 212, 0.25))",
            }}
          >
            {/* Enhanced motion trail */}
            <div
              className="absolute inset-2 bg-gradient-to-r from-indigo-300/20 to-cyan-300/20 dark:from-indigo-300/20 dark:to-cyan-300/20 blur-xl"
              style={{
                borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
                animation: "morphTrail 25s ease-in-out infinite reverse",
                animationDelay: "3.6s",
              }}
            ></div>
          </div>
        </div>

        {/* Enhanced wave patterns for dark mode */}
        <div className="absolute inset-0 opacity-15 dark:opacity-25" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)
              `,
              animation: "wavePattern 40s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Enhanced floating particles with better dark mode colors */}
        <div className="absolute inset-0 opacity-25 dark:opacity-40" aria-hidden="true">
          {/* Enhanced small floating particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatParticle ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {/* Enhanced main particle */}
              <div className="w-1 h-1 bg-blue-400/60 dark:bg-cyan-400/80 rounded-full relative shadow-lg shadow-cyan-400/50">
                {/* Enhanced comet trail */}
                <div
                  className="absolute w-8 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent dark:from-cyan-400/60 dark:to-transparent rounded-full"
                  style={{
                    right: "100%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    animation: `cometTrail ${15 + Math.random() * 10}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                    boxShadow: "0 0 8px rgba(6, 182, 212, 0.4)",
                  }}
                ></div>
                {/* Enhanced secondary trail */}
                <div
                  className="absolute w-4 h-0.5 bg-gradient-to-r from-blue-300/30 to-transparent dark:from-cyan-300/40 dark:to-transparent rounded-full"
                  style={{
                    right: "80%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    animation: `cometTrail ${15 + Math.random() * 10}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5 + 0.2}s`,
                  }}
                ></div>
              </div>
            </div>
          ))}

          {/* Enhanced medium floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`medium-${i}`}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatParticle ${20 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            >
              {/* Enhanced main particle */}
              <div className="w-2 h-2 bg-purple-400/40 dark:bg-violet-400/70 rounded-full relative shadow-lg shadow-violet-400/40">
                {/* Enhanced extended comet trail */}
                <div
                  className="absolute w-12 h-0.5 bg-gradient-to-r from-purple-400/30 to-transparent dark:from-violet-400/50 dark:to-transparent rounded-full"
                  style={{
                    right: "100%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    animation: `cometTrail ${20 + Math.random() * 10}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 8}s`,
                    boxShadow: "0 0 6px rgba(139, 92, 246, 0.3)",
                  }}
                ></div>
                {/* Enhanced secondary trail */}
                <div
                  className="absolute w-6 h-0.5 bg-gradient-to-r from-purple-300/20 to-transparent dark:from-violet-300/30 dark:to-transparent rounded-full"
                  style={{
                    right: "75%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    animation: `cometTrail ${20 + Math.random() * 10}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 8 + 0.3}s`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced grid with better dark mode visibility */}
        <div
          className={`absolute inset-0 ${hoveredGrid ? "opacity-40" : "opacity-25"} transition-opacity duration-500`}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
              animation: "grid-move 40s linear infinite",
            }}
          ></div>
        </div>

        {/* Enhanced secondary grid */}
        <div
          className={`absolute inset-0 ${hoveredGrid ? "opacity-25" : "opacity-15"} transition-opacity duration-500`}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px)
            `,
              backgroundSize: "100px 100px",
              animation: "grid-move-slow 60s linear infinite",
            }}
          ></div>
        </div>

        {/* Enhanced decorative dots with dark mode colors */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Enhanced dots with glow effects */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400/60 dark:bg-cyan-400/80 rounded-full shadow-lg shadow-cyan-400/50"></div>
          <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-violet-500/50 dark:bg-violet-400/70 rounded-full shadow-lg shadow-violet-400/40"></div>
          <div className="absolute top-40 left-1/3 w-1 h-1 bg-emerald-400/60 dark:bg-emerald-400/80 rounded-full shadow-lg shadow-emerald-400/50"></div>

          <div className="absolute top-1/2 left-16 w-1.5 h-1.5 bg-cyan-400/60 dark:bg-cyan-400/80 rounded-full shadow-lg shadow-cyan-400/50"></div>
          <div className="absolute top-1/2 right-20 w-2 h-2 bg-blue-500/50 dark:bg-blue-400/70 rounded-full shadow-lg shadow-blue-400/40"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-indigo-400/60 dark:bg-indigo-400/80 rounded-full shadow-lg shadow-indigo-400/50"></div>

          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-emerald-400/60 dark:bg-emerald-400/80 rounded-full shadow-lg shadow-emerald-400/50"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-violet-500/50 dark:bg-violet-400/70 rounded-full shadow-lg shadow-violet-400/40"></div>
          <div className="absolute bottom-40 right-16 w-1 h-1 bg-cyan-400/60 dark:bg-cyan-400/80 rounded-full shadow-lg shadow-cyan-400/50"></div>

          <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-blue-400/50 dark:bg-blue-400/70 rounded-full shadow-lg shadow-blue-400/40"></div>
          <div className="absolute top-3/4 left-1/5 w-1.5 h-1.5 bg-indigo-400/60 dark:bg-indigo-400/80 rounded-full shadow-lg shadow-indigo-400/50"></div>
          <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-emerald-500/60 dark:bg-emerald-400/80 rounded-full shadow-lg shadow-emerald-400/50"></div>
        </div>

        {/* Enhanced floating popups with dark mode aesthetics */}
        {popups.map((popup) => (
          <div
            key={popup.id}
            className="absolute z-30 hidden sm:block"
            style={{
              top: popup.position.top,
              left: popup.position.left,
              right: popup.position.right,
              bottom: popup.position.bottom,
              transform: popup.position.transform,
              animation: `floatPopup 10s ease-in-out infinite`,
              animationDelay: popup.delay,
            }}
          >
            {/* Enhanced motion trail with glow */}
            <div
              className={`absolute inset-0 bg-${popup.color}-100/20 dark:bg-${popup.darkGlow}/20 rounded-full blur-sm`}
              style={{
                animation: `popupTrail 10s ease-in-out infinite`,
                animationDelay: popup.delay,
                transform: "scale(1.2)",
                boxShadow: `0 0 20px rgba(6, 182, 212, 0.2)`,
              }}
            ></div>

            <div
              className={`bg-white/90 dark:bg-gray-900/90 border border-${popup.color}-200 dark:border-${popup.darkGlow}/30 shadow-lg px-4 py-2 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 relative z-10 backdrop-blur-sm`}
              style={{
                boxShadow: `0 0 15px rgba(6, 182, 212, 0.15), 0 4px 6px -1px rgba(0, 0, 0, 0.1)`,
              }}
            >
              <div className="flex items-center space-x-2">
                <div className={`text-${popup.color}-500 dark:text-${popup.darkGlow}`}>{popup.icon}</div>
                <span className={`text-${popup.color}-600 dark:text-${popup.darkGlow} font-medium text-sm`}>
                  {popup.content}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Enhanced responsive popup elements for smaller screens */}
        <div className="sm:hidden flex flex-wrap justify-center gap-2 mb-8 px-4">
          {popups.map((popup) => (
            <div
              key={`mobile-${popup.id}`}
              className={`bg-white/90 dark:bg-gray-900/90 border border-${popup.color}-200 dark:border-${popup.darkGlow}/30 shadow-lg px-3 py-1.5 rounded-full transition-all duration-300 backdrop-blur-sm`}
              style={{
                boxShadow: `0 0 10px rgba(6, 182, 212, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)`,
              }}
            >
              <div className="flex items-center space-x-1.5">
                <div className={`text-${popup.color}-500 dark:text-${popup.darkGlow}`}>
                  {popup.icon && <div className="w-3 h-3">{popup.icon}</div>}
                </div>
                <span className={`text-${popup.color}-600 dark:text-${popup.darkGlow} font-medium text-xs`}>
                  {popup.content}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-12 max-w-5xl mx-auto">
              {/* Enhanced central logo with dark mode glow */}
              <div className="relative mx-auto w-32 h-32 mb-16">
                {/* Enhanced outer ring with glow */}
                <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-cyan-500/20 transition-colors duration-300 shadow-lg shadow-cyan-400/20"></div>
                {/* Enhanced middle ring */}
                <div className="absolute inset-4 rounded-full bg-blue-200 dark:bg-cyan-400/30 transition-colors duration-300 shadow-lg shadow-cyan-400/30"></div>
                {/* Enhanced inner circle with stronger glow */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 flex items-center justify-center shadow-xl shadow-cyan-500/40 dark:shadow-cyan-400/50 transition-colors duration-300">
                  <img src="/geneline-x-logo.png" alt="Geneline-X" className="w-8 h-8" />
                </div>
              </div>

              {/* Enhanced floating elements with dark mode styling */}

              {/* Top Left */}
              <div className="absolute -top-8 left-8 lg:left-16">
                <div
                  className="bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-cyan-400/30 shadow-lg px-4 py-2 rounded-full transition-all duration-500 hover:shadow-xl relative backdrop-blur-sm"
                  style={{
                    animation: "gentleFloat 8s ease-in-out infinite",
                    animationDelay: "0s",
                    boxShadow: "0 0 15px rgba(6, 182, 212, 0.15), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Enhanced subtle trail */}
                  <div
                    className="absolute inset-0 bg-cyan-100/30 dark:bg-cyan-400/20 rounded-full blur-sm"
                    style={{
                      animation: "gentleFloatTrail 8s ease-in-out infinite",
                      animationDelay: "0.2s",
                      transform: "scale(1.1)",
                    }}
                  ></div>

                  <div className="flex items-center space-x-2 relative z-10">
                    <div className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full transition-colors duration-300 shadow-lg shadow-cyan-400/50"></div>
                    <span className="text-cyan-600 dark:text-cyan-400 font-medium text-sm transition-colors duration-300">
                      Africa-First
                    </span>
                  </div>
                </div>
              </div>

              {/* Top Right */}
              <div className="absolute -top-8 right-8 lg:right-16">
                <div
                  className="bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-blue-400/30 shadow-lg px-4 py-2 rounded-full transition-all duration-500 hover:shadow-xl relative backdrop-blur-sm"
                  style={{
                    animation: "gentleFloat 8s ease-in-out infinite",
                    animationDelay: "2s",
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.15), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Enhanced subtle trail */}
                  <div
                    className="absolute inset-0 bg-blue-100/30 dark:bg-blue-400/20 rounded-full blur-sm"
                    style={{
                      animation: "gentleFloatTrail 8s ease-in-out infinite",
                      animationDelay: "2.2s",
                      transform: "scale(1.1)",
                    }}
                  ></div>

                  <div className="flex items-center space-x-2 relative z-10">
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full transition-colors duration-300 shadow-lg shadow-blue-400/50"></div>
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm transition-colors duration-300">
                      No-Code
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Left */}
              <div className="absolute -bottom-16 left-8 lg:left-20">
                <div
                  className="bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-emerald-400/30 shadow-lg px-4 py-3 rounded-full flex items-center space-x-3 transition-all duration-500 hover:shadow-xl relative backdrop-blur-sm"
                  style={{
                    animation: "gentleFloat 8s ease-in-out infinite",
                    animationDelay: "4s",
                    boxShadow: "0 0 15px rgba(16, 185, 129, 0.15), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Enhanced subtle trail */}
                  <div
                    className="absolute inset-0 bg-emerald-100/30 dark:bg-emerald-400/20 rounded-full blur-sm"
                    style={{
                      animation: "gentleFloatTrail 8s ease-in-out infinite",
                      animationDelay: "4.2s",
                      transform: "scale(1.1)",
                    }}
                  ></div>

                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold transition-colors duration-300 relative z-10 shadow-lg shadow-emerald-400/40">
                    A
                  </div>
                  <span className="text-gray-700 dark:text-emerald-300 font-medium text-sm transition-colors duration-300 relative z-10">
                    Built for Africa
                  </span>
                </div>
              </div>

              {/* Bottom Right */}
              <div className="absolute -bottom-16 right-8 lg:right-20">
                <div
                  className="bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-violet-400/30 shadow-lg px-4 py-3 rounded-full flex items-center space-x-3 transition-all duration-500 hover:shadow-xl relative backdrop-blur-sm"
                  style={{
                    animation: "gentleFloat 8s ease-in-out infinite",
                    animationDelay: "6s",
                    boxShadow: "0 0 15px rgba(139, 92, 246, 0.15), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Enhanced subtle trail */}
                  <div
                    className="absolute inset-0 bg-violet-100/30 dark:bg-violet-400/20 rounded-full blur-sm"
                    style={{
                      animation: "gentleFloatTrail 8s ease-in-out infinite",
                      animationDelay: "6.2s",
                      transform: "scale(1.1)",
                    }}
                  ></div>

                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 dark:from-violet-400 dark:to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold transition-colors duration-300 relative z-10 shadow-lg shadow-violet-400/40">
                    G
                  </div>
                  <span className="text-gray-700 dark:text-violet-300 font-medium text-sm transition-colors duration-300 relative z-10">
                    Geneline-X Team
                  </span>
                </div>
              </div>

              {/* Enhanced main content */}
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-gray-100 leading-tight mb-8 transition-colors duration-300">
                  Transform Your Business
                  <br />
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent transition-colors duration-300">
                    with AI Innovation
                  </span>
                </h1>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
                  Geneline-X empowers African businesses with cutting-edge AI solutions and no-code platforms, making
                  advanced technology accessible to everyone.
                </p>
              </div>

              <div
                className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 dark:from-cyan-400 dark:to-blue-500 dark:hover:from-cyan-500 dark:hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30 dark:shadow-cyan-400/40">
                  Start Building Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div
                className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 dark:text-gray-400 mt-8 transition-colors duration-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 transition-colors duration-300" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 transition-colors duration-300" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 transition-colors duration-300" />
                    <span>500+ businesses trust us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Custom CSS for all animations including trailing effects */}
        <style jsx>{`
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes gentleFloatTrail {
            0%, 100% { 
              transform: translateY(2px) scale(1.1); 
              opacity: 0.3;
            }
            50% { 
              transform: translateY(-6px) scale(1.15); 
              opacity: 0.5;
            }
          }
          
          @keyframes floatPopup {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.05); }
          }
          
          @keyframes popupTrail {
            0%, 100% { 
              transform: translateY(2px) scale(1.2); 
              opacity: 0.2;
            }
            50% { 
              transform: translateY(-8px) scale(1.3); 
              opacity: 0.4;
            }
          }
          
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          
          @keyframes grid-move-slow {
            0% { transform: translate(0, 0); }
            100% { transform: translate(100px, 100px); }
          }
          
          @keyframes floatSlow {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1);
            }
            33% { 
              transform: translateY(-20px) translateX(10px) scale(1.05);
            }
            66% { 
              transform: translateY(10px) translateX(-15px) scale(0.95);
            }
          }
          
          @keyframes trailLag {
            0%, 100% { 
              transform: translateY(3px) translateX(2px) scale(0.95);
              opacity: 0.6;
            }
            33% { 
              transform: translateY(-17px) translateX(8px) scale(1.02);
              opacity: 0.8;
            }
            66% { 
              transform: translateY(13px) translateX(-13px) scale(0.92);
              opacity: 0.7;
            }
          }
          
          @keyframes morphBlob {
            0%, 100% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
              transform: translateY(-10px) rotate(90deg);
            }
            50% {
              border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
              transform: translateY(5px) rotate(180deg);
            }
            75% {
              border-radius: 60% 40% 60% 30% / 60% 30% 40% 70%;
              transform: translateY(-5px) rotate(270deg);
            }
          }
          
          @keyframes morphTrail {
            0%, 100% {
              border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
              transform: translateY(2px) rotate(-10deg) scale(0.9);
              opacity: 0.4;
            }
            25% {
              border-radius: 40% 60% 60% 40% / 60% 40% 40% 60%;
              transform: translateY(-8px) rotate(80deg) scale(0.95);
              opacity: 0.6;
            }
            50% {
              border-radius: 60% 40% 40% 60% / 40% 60% 60% 40%;
              transform: translateY(7px) rotate(170deg) scale(0.85);
              opacity: 0.5;
            }
            75% {
              border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
              transform: translateY(-3px) rotate(260deg) scale(0.92);
              opacity: 0.7;
            }
          }
          
          @keyframes wavePattern {
            0%, 100% {
              transform: translateX(0px) translateY(0px) scale(1);
              opacity: 0.15;
            }
            25% {
              transform: translateX(20px) translateY(-10px) scale(1.1);
              opacity: 0.25;
            }
            50% {
              transform: translateX(-10px) translateY(15px) scale(0.9);
              opacity: 0.1;
            }
            75% {
              transform: translateX(15px) translateY(-5px) scale(1.05);
              opacity: 0.2;
            }
          }
          
          @keyframes floatParticle {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
              opacity: 0.6;
            }
            25% {
              transform: translateY(-30px) translateX(20px);
              opacity: 1;
            }
            50% {
              transform: translateY(-10px) translateX(-15px);
              opacity: 0.4;
            }
            75% {
              transform: translateY(-25px) translateX(10px);
              opacity: 0.8;
            }
          }
          
          @keyframes cometTrail {
            0%, 100% {
              opacity: 0.3;
              transform: translateY(-50%) scaleX(0.8);
            }
            25% {
              opacity: 0.6;
              transform: translateY(-50%) scaleX(1.2);
            }
            50% {
              opacity: 0.2;
              transform: translateY(-50%) scaleX(0.6);
            }
            75% {
              opacity: 0.5;
              transform: translateY(-50%) scaleX(1.0);
            }
          }
        `}</style>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent mb-2 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/50 px-4 py-2 transition-colors duration-300">
                Our Mission
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight transition-colors duration-300">
                Democratizing AI for{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent transition-colors duration-300">
                  Africa
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                We believe that every African business, regardless of size or technical expertise, should have access to
                world-class AI solutions. Our no-code platform makes advanced technology accessible to everyone.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-emerald-500 dark:text-emerald-400 transition-colors duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Locally relevant AI solutions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-emerald-500 dark:text-emerald-400 transition-colors duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    No technical expertise required
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-emerald-500 dark:text-emerald-400 transition-colors duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Affordable and scalable
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700/50 flex items-center justify-center transition-colors duration-300 backdrop-blur-sm">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-cyan-500 dark:text-cyan-400 mx-auto mb-4 transition-colors duration-300" />
                  <p className="text-gray-700 dark:text-gray-300 text-lg font-medium transition-colors duration-300">
                    Empowering 54 African Nations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Company Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight transition-colors duration-300">
                  Empowering Africa Through
                  <br />
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent transition-colors duration-300">
                    AI Innovation
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
                  At Geneline-X, we're committed to harnessing the power of artificial intelligence to address local
                  challenges and drive sustainable development. Our team of dedicated professionals is building
                  solutions that make AI accessible and beneficial for communities across Africa.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-lg shadow-cyan-400/30">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Pioneers in no-code AI chatbot development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-lg shadow-cyan-400/30">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Advocates for ethical and inclusive AI practices
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-lg shadow-cyan-400/30">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Collaborators with regional organizations for social impact
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-lg shadow-cyan-400/30">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Champions of youth empowerment in the tech industry
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 dark:from-cyan-400 dark:to-blue-500 dark:hover:from-cyan-500 dark:hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 dark:shadow-cyan-400/30">
                  Our Research
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Timeline */}
            <div className="relative">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 transition-colors duration-300 shadow-lg shadow-cyan-400/20"></div>

              <div className="space-y-12">
                {/* 2023 - Founded */}
                <div className="relative flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 transition-colors duration-300 shadow-lg shadow-cyan-400/30">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-cyan-600 dark:text-cyan-400 text-lg font-bold mb-2 transition-colors duration-300">
                      2023
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">
                      Geneline-X Founded
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      Established in Sierra Leone to democratize AI access and empower local talent.
                    </p>
                  </div>
                </div>

                {/* 2024 - GeniStudio */}
                <div className="relative flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 transition-colors duration-300 shadow-lg shadow-cyan-400/30">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-cyan-600 dark:text-cyan-400 text-lg font-bold mb-2 transition-colors duration-300">
                      2024
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">
                      Launch of GeniStudio
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      Introduced a no-code platform enabling businesses to create custom AI chatbots without technical
                      expertise.
                    </p>
                  </div>
                </div>

                {/* 2024 - Xplain AI */}
                <div className="relative flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 transition-colors duration-300 shadow-lg shadow-cyan-400/30">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-cyan-600 dark:text-cyan-400 text-lg font-bold mb-2 transition-colors duration-300">
                      2024
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">
                      Xplain AI Released
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      Developed an AI-powered tool to simplify and summarize complex documents for users.
                    </p>
                  </div>
                </div>

                {/* 2025 - Regional Expansion */}
                <div className="relative flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 transition-colors duration-300 shadow-lg shadow-cyan-400/30">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-cyan-600 dark:text-cyan-400 text-lg font-bold mb-2 transition-colors duration-300">
                      2025
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">
                      Regional Expansion
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      Extended services to neighboring West African countries, fostering AI adoption across the region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section
        id="products"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/50 px-4 py-2 transition-colors duration-300">
              Our Solutions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent transition-colors duration-300">
                Modern Africa
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Discover how our AI-powered platform can transform your business operations and unlock new possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/50 transition-colors duration-300 shadow-lg shadow-cyan-400/20">
                    <feature.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <Button
                      variant="ghost"
                      className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 p-0 h-auto font-semibold transition-colors duration-300"
                    >
                      Learn More
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50 px-4 py-2 transition-colors duration-300">
              Industries We Serve
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Transforming Every{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent transition-colors duration-300">
                Sector
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Healthcare", icon: "🏥", description: "AI-powered diagnostics and patient management" },
              { title: "Finance", icon: "💰", description: "Smart banking and financial inclusion solutions" },
              { title: "Agriculture", icon: "🌾", description: "Precision farming and crop optimization" },
              { title: "Education", icon: "📚", description: "Personalized learning and skill development" },
              { title: "Retail", icon: "🛍️", description: "Smart inventory and customer insights" },
              { title: "Manufacturing", icon: "🏭", description: "Automated quality control and optimization" },
              { title: "Logistics", icon: "🚚", description: "Route optimization and supply chain management" },
              { title: "Energy", icon: "⚡", description: "Smart grid management and renewable energy" },
            ].map((industry, index) => (
              <Card
                key={index}
                className="bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-300 border-violet-200 dark:border-violet-700/50 px-4 py-2 transition-colors duration-300">
              Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-400 dark:to-purple-500 bg-clip-text text-transparent transition-colors duration-300">
                African Leaders
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 dark:text-amber-300 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-gray-900 dark:text-gray-100 font-semibold transition-colors duration-300">
                      {testimonial.author}
                    </p>
                    <p className="text-cyan-600 dark:text-cyan-400 text-sm transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-950 to-black dark:from-gray-950 dark:via-black dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-colors duration-300">
              Business?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of African businesses already using Geneline-X to revolutionize their operations with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Input
              placeholder="Enter your email address"
              className="bg-white/10 dark:bg-gray-800/50 border-gray-600 dark:border-gray-700/50 text-white placeholder-gray-400 max-w-md transition-colors duration-300 backdrop-blur-sm"
            />
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <p className="text-gray-400 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/geneline-x-logo.png" alt="Geneline-X Logo" className="w-8 h-8" />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                  Geneline-X
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                Empowering Africa through AI-driven innovation and no-code solutions.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">𝕏</span>
                </div>
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">f</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-4 transition-colors duration-300">
                Products
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    AI Platform
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    No-Code Builder
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Analytics Suite
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    API Access
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-4 transition-colors duration-300">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-4 transition-colors duration-300">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
            <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
              © 2024 Geneline-X. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
