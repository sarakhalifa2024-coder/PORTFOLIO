'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Code2, Zap, Cloud } from 'lucide-react'
import { translations } from '@/lib/translations'
import { useLanguage } from '@/contexts/language-provider'

export function Services() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const services = [
    {
      title: language === 'en' ? 'Frontend Development' : 'تطوير الواجهات الأمامية',
      description: language === 'en' 
        ? 'Building clean, responsive, and user-friendly web interfaces with modern frontend technologies.'
        : 'بناء واجهات ويب نظيفة وسريعة الاستجابة وسهلة الاستخدام باستخدام أحدث تقنيات الويب الحديثة.',
      icon: Code2,
      image: '/service-frontend-dev.jpg',
      techs: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS']
    },
    {
      title: language === 'en' ? 'Full-Stack Applications' : 'تطبيقات متكاملة',
      description: language === 'en'
        ? 'Developing scalable single-page applications using reusable React components and structured code.'
        : 'تطوير تطبيقات قابلة للتوسع باستخدام مكونات React قابلة لإعادة الاستخدام والأكواد المنظمة بشكل هندسي.',
      icon: Zap,
      image: '/service-fullstack.jpg',
      techs: ['React.js', 'Node.js', 'Express', 'MongoDB', 'API Design']
    },
    {
      title: language === 'en' ? 'API Integration' : 'دمج الخدمات',
      description: language === 'en'
        ? 'Connecting front-end applications with RESTful APIs and handling dynamic data smoothly.'
        : 'ربط تطبيقات الويب بالخدمات والواجهات البرمجية وإدارة البيانات الديناميكية بسلاسة وكفاءة.',
      icon: Cloud,
      image: '/service-fullstack.jpg',
      techs: ['REST APIs', 'Axios', 'Async/Await', 'Error Handling']
    }
  ]

  return (
    <section id="services" className="min-h-screen py-20 px-4 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.myServices}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-primary/20 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 overflow-hidden"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gradient Border Animation */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground leading-tight">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  <div className="space-y-3 pt-6 border-t border-primary/10">
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wide">{t.technologiesUsed}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.techs.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-xs font-semibold border border-primary/20 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            {language === 'en' ? 'Want to know more about my services?' : 'هل تريد أن تعرف المزيد عن خدماتي؟'}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          >
            {t.contactMe}
          </a>
        </div>
      </div>
    </section>
  )
}
