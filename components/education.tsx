'use client'

import { Award, BookOpen, GraduationCap } from 'lucide-react'
import { useState, useEffect } from 'react'
import { translations } from '@/lib/translations'
import { useLanguage } from '@/contexts/language-provider'

export function Education() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const education = [
    {
      title: 'Bachelor\'s Degree in Electrical Engineering',
      school: 'Assiut University',
      year: '2024',
      icon: GraduationCap,
      details: 'Communication & Electronics '
    }
  ]

  const certifications = [
    { title: 'Learn HTML & CSS From Scratch', issuer: 'Udemy', date: '2025' },
    { title: 'Learn HTML – Full Tutorial', issuer: 'Udemy', date: '2025' },
    { title: 'HTML & CSS for Beginners', issuer: 'Udemy', date: '2024' },
    { title: 'Algorithms & Problem Solving Level 1 Solutions', issuer: 'Multiple', date: '2024' },
    { title: 'Programming Using C++ - Level 1', issuer: 'Multiple', date: '2024' },
    { title: 'Front-End Developer (React)', issuer: 'Route IT Training Center', date: '2025' },
    { title: 'Ansible for Network Engineers', issuer: 'Udemy', date: '2024' }
  ]

  return (
    <section id="education" className="min-h-screen py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {t.education} & <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">{t.certifications}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {language === 'en' ? 'My academic journey and professional certifications' : 'رحلتي الأكاديمية والشهادات المهنية'}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              {t.education}
            </h3>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-primary/20 bg-card hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{edu.title}</h4>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">{edu.year}</span>
                  </div>
                  <p className="text-muted-foreground font-medium">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
                  {/* <p className="text-sm text-accent font-medium mt-2">Grade: {edu.grade}</p> */}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Award className="w-8 h-8 text-secondary" />
              Certifications
            </h3>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-secondary/20 bg-card hover:border-secondary/50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{cert.title}</p>
                      <p className="text-muted-foreground text-xs mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-medium text-secondary whitespace-nowrap ml-2">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
