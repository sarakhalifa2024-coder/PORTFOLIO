'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import { translations } from '@/lib/translations'
import { useLanguage } from '@/contexts/language-provider'

export function Footer() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-card border-t border-primary/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SK</p>
            <p className="text-muted-foreground text-sm mt-2">{language === 'en' ? 'Full-Stack Web Developer' : 'مطور ويب متكامل'}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{language === 'en' ? 'Navigation' : 'التنقل'}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">{t.home}</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">{t.about}</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">{t.myProjects}</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t.contact}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.myServices}</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">{language === 'en' ? 'Frontend Dev' : 'تطوير الواجهات'}</span></li>
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">{language === 'en' ? 'Full-Stack Dev' : 'تطوير متكامل'}</span></li>
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">{language === 'en' ? 'API Integration' : 'دمج الخدمات'}</span></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{language === 'en' ? 'Connect' : 'تواصل'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:sarakhalifa2024@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Email</a></li>
              <li><a href="https://www.linkedin.com/in/sara6khalifa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 {language === 'en' ? 'Sara Khalifa. All rights reserved.' : 'سارة خليفة. جميع الحقوق محفوظة.'}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
