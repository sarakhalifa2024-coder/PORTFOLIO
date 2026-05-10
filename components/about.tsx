'use client'

import { useEffect, useState } from 'react'
import { translations } from '@/lib/translations'
import { useLanguage } from '@/contexts/language-provider'

export function About() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.aboutMe}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
            {language === 'en' ? 'Get to know me better' : 'تعرف أكثر على قصتي وخبراتي'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">{t.drivenByPassion}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.aboutDescription1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.aboutDescription2}
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gradient-to-br from-primary to-secondary rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">{t.frontendExpertise}</p>
                  <p className="text-muted-foreground text-sm">{t.frontendExpertiseDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gradient-to-br from-secondary to-accent rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">{t.backendDevelopment}</p>
                  <p className="text-muted-foreground text-sm">{t.backendDevelopmentDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gradient-to-br from-accent to-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">{t.fullStackSolutions}</p>
                  <p className="text-muted-foreground text-sm">{t.fullStackSolutionsDesc}</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
              {t.contactMe}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/20">
              <p className="text-4xl font-bold text-primary mb-2">5+</p>
              <p className="text-muted-foreground font-semibold">{t.projectsCompleted}</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-secondary/50 transition-colors hover:shadow-lg hover:shadow-secondary/20">
              <p className="text-4xl font-bold text-secondary mb-2">120+</p>
              <p className="text-muted-foreground font-semibold">{t.trainingHours}</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 hover:border-accent/50 transition-colors hover:shadow-lg hover:shadow-accent/20">
              <p className="text-4xl font-bold text-accent mb-2">10+</p>
              <p className="text-muted-foreground font-semibold">{t.techSkills}</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/20">
              <p className="text-4xl font-bold text-primary mb-2">1+</p>
              <p className="text-muted-foreground font-semibold">{language === 'en' ? 'Years Training' : 'سنة تدريب'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
