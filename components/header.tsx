'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
import Image from 'next/image'
import { translations } from '@/lib/translations'
import { useLanguage } from '@/contexts/language-provider'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { label: t.home, href: '#home' },
    { label: t.about, href: '#about' },
    { label: t.education, href: '#education' },
    { label: t.skills, href: '#skills' },
    { label: t.experience, href: '#experience' },
    { label: t.services, href: '#services' },
    { label: t.projects, href: '#projects' },
    { label: t.achievements, href: '#achievements' },
    { label: language === 'en' ? 'Testimonials' : 'الشهادات', href: '#testimonials' },
    { label: t.pricing, href: '/pricing' },
    { label: t.contact, href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 flex-shrink-0">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Image 
                src="/sara-logo.jpg" 
                alt="SK Logo" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
            </div> */}
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => {
                const newLang = language === 'en' ? 'ar' : 'en'
                setLanguage(newLang)
              }}
              className="p-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-2"
              title={language === 'en' ? 'Switch to العربية' : 'Switch to English'}
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold">{language.toUpperCase()}</span>
            </button>

            {/* Download CV */}
            {/* <a
              href="/SaraKhalifa_CV.pdf"
              download="SaraKhalifa_CV.pdf"
              className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all"
              aria-label="Download CV"
            >
              {t.downloadCV}
            </a> */}


            <a
  href="https://drive.google.com/file/d/11qEgAr2x_r0Tm16RBS1b66IRvvLVylW8/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all"
  aria-label="Download CV"
>
  {t.downloadCV}
</a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-primary/10 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
