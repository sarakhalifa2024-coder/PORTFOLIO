'use client'

import { Star } from 'lucide-react'
import { useState, useEffect } from 'react'
import { translations } from '@/lib/translations'
import { useLanguage } from '@/contexts/language-provider'

export function Achievements() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="achievements" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {language === 'en' ? 'Milestones' : 'المحطات'} & <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">{language === 'en' ? 'Awards' : 'الجوائز'}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {language === 'en' ? 'Recognition and achievements throughout my career' : 'الاعترافات والإنجازات طوال حياتي المهنية'}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Full-Stack Developer Training', desc: '120+ hours of professional training completed', icon: '🎓' },
            { title: '5+ Projects Completed', desc: 'Successfully delivered multiple web applications', icon: '🚀' },
            { title: 'React Specialist', desc: 'Expert in building modern React applications', icon: '⚛️' },
            { title: 'Problem Solver', desc: 'Strong analytical and debugging skills', icon: '🔧' },
            { title: 'Team Player', desc: 'Excellent collaboration and communication', icon: '👥' },
            { title: 'Continuous Learner', desc: 'Always upskilling and staying current with tech', icon: '📚' }
          ].map((achievement, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm">{achievement.desc}</p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-muted/50 border border-primary/20">
            <p className="text-3xl font-bold text-primary">5+</p>
            <p className="text-muted-foreground mt-2">Projects</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-muted/50 border border-secondary/20">
            <p className="text-3xl font-bold text-secondary">10+</p>
            <p className="text-muted-foreground mt-2">Tech Skills</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-muted/50 border border-accent/20">
            <p className="text-3xl font-bold text-accent">3+</p>
            <p className="text-muted-foreground mt-2">Languages</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-muted/50 border border-primary/20">
            <p className="text-3xl font-bold text-primary">120+</p>
            <p className="text-muted-foreground mt-2">Training Hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}
