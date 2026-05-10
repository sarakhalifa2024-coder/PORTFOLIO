'use client'

import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'
import { translations } from '@/lib/translations'
import { useLanguage } from '@/contexts/language-provider'

export function Experience() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const experiences = [
    {
      title: 'Full-Stack Development Trainee',
      company: 'Digilians',
      location: 'Cairo, Egypt',
      period: 'Jan 2026 – Present',
      type: 'Professional Training',
      highlights: [
        'Completed 120+ hours of structured professional training in frontend and backend development',
        'Built 5+ responsive websites using HTML5, CSS3, and Bootstrap',
        'Developed 3+ interactive web applications using JavaScript and TypeScript',
        'Built modern React.js applications using component-based architecture',
        'Developed RESTful APIs using Node.js and Express.js',
        'Designed and managed MongoDB databases for full-stack applications',
        'Used Git & GitHub for version control and collaborative workflows'
      ]
    },
    {
      title: 'Mobile Application Development Trainee',
      company: 'Information Technology Institute (ITI)',
      location: 'Cairo, Egypt',
      period: 'Aug 2022',
      type: 'Internship',
      highlights: [
        'Completed a 60-hour intensive iOS development program',
        'Built 2 functional iOS applications using Swift and SwiftUI',
        'Applied object-oriented programming principles',
        'Strengthened debugging and problem-solving skills'
      ]
    },
    {
      title: 'Engineering Intern',
      company: 'Dawlia Co. for Medical Necessities',
      location: 'Assiut, Egypt',
      period: 'Mar 2022',
      type: 'Internship',
      highlights: [
        'Participated in a joint international project between KOREATECH University and Assiut University',
        'Collaborated within a multidisciplinary engineering team',
        'Gained exposure to real-world industrial processes',
        'Improved workflow optimization and technical skills'
      ]
    }
  ]

  return (
    <section id="experience" className="min-h-screen py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {language === 'en' ? 'Work' : 'العمل'} <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">{language === 'en' ? 'Experience' : 'الخبرة'}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {language === 'en' ? 'My professional journey and training experiences' : 'رحلتي المهنية وخبرات التدريب'}
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-primary/20 bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-lg text-primary font-semibold mt-1">{exp.company}</p>
                </div>
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium whitespace-nowrap">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
