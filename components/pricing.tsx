'use client'

import { Check } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { translations } from '@/lib/translations'
import { useLanguage } from '@/contexts/language-provider'

export function Pricing() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const plans = [
    {
      name: 'Starter',
      price: '$5',
      period: '/project',
      description: 'Perfect for small projects and MVPs',
      features: [
        'Responsive Frontend Design',
        'Basic React Components',
        'Mobile Optimization',
        'Git Setup & Deployment',
        '2 Weeks Support',
        'Unlimited Revisions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$100',
      period: '/project',
      description: 'Full-stack applications with databases',
      features: [
        'Complete Frontend Development',
        'Backend API Development',
        'Database Design & Setup',
        'RESTful API Integration',
        '1 Month Support',
        'Performance Optimization',
        'Security Best Practices',
        'Unlimited Revisions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '/quote',
      description: 'Complex, scalable solutions',
      features: [
        'Complete Full-Stack Solution',
        'Advanced Architecture',
        'Microservices Setup',
        'Real-time Features',
        'Advanced Security',
        '3 Months Support',
        'Performance Monitoring',
        'Ongoing Maintenance',
        'Team Training'
      ],
      popular: false
    }
  ]

  return (
    <section className="min-h-screen py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {t.pricingPlans} <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">{language === 'en' ? 'Plans' : 'الخطط'}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {language === 'en' ? 'Flexible pricing tailored to your project needs' : 'تسعير مرن مصمم وفقا لاحتياجات مشروعك'}
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg border transition-all ${
                plan.popular
                  ? 'border-primary bg-gradient-to-br from-primary/10 to-secondary/10 transform md:scale-105 shadow-2xl shadow-primary/20'
                  : 'border-primary/20 bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  {plan.price}
                </div>
                <p className="text-muted-foreground text-sm mt-1">{plan.period}</p>
              </div>

              <button
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50'
                    : 'border-2 border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-3">{language === 'en' ? 'Ready to Start Your Project?' : 'هل أنت مستعد لبدء مشروعك؟'}</h3>
          <p className="text-muted-foreground mb-6">{language === 'en' ? 'Let&apos;s discuss your needs and find the perfect plan for you' : 'دعنا نناقش احتياجاتك ونجد الخطة المثالية لك'}</p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            {language === 'en' ? 'Schedule a Consultation' : 'احجز استشارة'}
          </Link>
        </div>
      </div>
    </section>
  )
}
