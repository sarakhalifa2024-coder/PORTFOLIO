'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, Github, Newspaper, CheckSquare, ShoppingCart, Calculator } from 'lucide-react'
import { translations } from '@/lib/translations'
import { useLanguage } from '@/contexts/language-provider'

export function Projects() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const projects = [
    {
      title: language === 'en' ? 'News Web Application' : 'تطبيق الأخبار',
      description: language === 'en'
        ? 'A comprehensive news platform with categories, weather widget, exchange rates, and live match results. Features dynamic content rendering and responsive design.'
        : 'منصة أخبار شاملة تتضمن فئات متعددة وأداة الطقس وأسعار الصرف ونتائج المباريات المباشرة. تتميز بعرض محتوى ديناميكي وتصميم سريع الاستجابة.',
      icon: Newspaper,
      iconColor: 'from-blue-500 to-cyan-500',
      tags: ['React.js', 'APIs', 'Responsive Design'],
      link: '#',
      github: '#'
    },
    {
      title: language === 'en' ? 'To-Do List Application' : 'تطبيق إدارة المهام',
      description: language === 'en'
        ? 'An interactive task management application with priority system, local storage persistence, and beautiful glass morphism UI. Supports adding, editing, and marking tasks as completed.'
        : 'تطبيق إدارة مهام تفاعلي مع نظام الأولويات والتخزين المحلي والواجهة الزجاجية الجميلة. يدعم إضافة وتعديل المهام وتحديدها كمنجزة.',
      icon: CheckSquare,
      iconColor: 'from-green-500 to-emerald-500',
      tags: ['JavaScript', 'DOM API', 'Local Storage'],
      link: '#',
      github: '#'
    },
    {
      title: language === 'en' ? 'E-Commerce Store' : 'متجر إلكتروني',
      description: language === 'en'
        ? 'Modern online store with product catalog, shopping cart functionality, and checkout flow. Built with React and integrated with payment processing.'
        : 'متجر حديث عبر الإنترنت مع كتالوج منتجات وعربة تسوق ومعالجة الدفع. بني باستخدام React مع دمج معالجات الدفع الاحترافية.',
      icon: ShoppingCart,
      iconColor: 'from-purple-500 to-pink-500',
      tags: ['React.js', 'E-Commerce', 'Payments'],
      link: '#',
      github: '#'
    },
    {
      title: language === 'en' ? 'Salary Calculator Application' : 'حاسبة الرواتب',
      description: language === 'en'
        ? 'Professional salary calculation system handling complex formulas including overtime calculations, bonuses, penalties, and tax deductions. Built with advanced JavaScript logic.'
        : 'نظام احتساب رواتب احترافي يتعامل مع معادلات معقدة تشمل الوقت الإضافي والمكافآت والعقوبات والخصومات الضريبية.',
      icon: Calculator,
      iconColor: 'from-orange-500 to-red-500',
      tags: ['JavaScript', 'Business Logic', 'Calculations'],
      link: '#',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gradient-to-b from-muted/30 via-background to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.myProjects}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.projectsSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden border border-primary/20 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
              >
                {/* Icon Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-muted to-background flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.iconColor} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <Icon className="w-32 h-32 text-primary/60 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="space-y-3">
                      <h4 className="text-white font-bold text-lg">{project.title}</h4>
                      <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.iconColor} bg-opacity-10`}>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-xs font-semibold border border-primary/20 hover:border-primary/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-primary/10">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all justify-center group/btn hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t.viewProject}</span>
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-primary/20 text-primary rounded-lg text-sm font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all justify-center group/btn hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t.viewCode}</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 text-center">
            <p className="text-4xl font-bold text-primary mb-2">4+</p>
            <p className="text-muted-foreground font-semibold">{t.projectsCompleted}</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 text-center">
            <p className="text-4xl font-bold text-secondary mb-2">100%</p>
            <p className="text-muted-foreground font-semibold">{t.satisfactionRate}</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 text-center">
            <p className="text-4xl font-bold text-accent mb-2">500+</p>
            <p className="text-muted-foreground font-semibold">{t.developmentHours}</p>
          </div>
        </div>
      </div>
    </section>
  )
}