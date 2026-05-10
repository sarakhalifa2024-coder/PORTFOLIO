'use client'

import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'
import { translations } from '@/lib/translations'
import { useLanguage } from '@/contexts/language-provider'

export function Testimonials() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const testimonials = [
    {
      name: 'Dr. Sara Ahmed',
      title: language === 'en' ? 'Data & AI Specialist' : 'متخصصة في البيانات والذكاء الاصطناعي',
      company: language === 'en' ? 'Tech Company' : 'شركة تكنولوجيا',
      message: language === 'en' 
        ? 'Sara is proactive and detail-oriented. She keeps refining the interface until the final result feels polished, responsive, and easy to use.'
        : 'سارة استباقية وتركز على التفاصيل. تستمر في تحسين الواجهة حتى تصبح النتيجة احترافية وسهلة الاستخدام.',
      rating: 5,
      initials: 'SA'
    },
    {
      name: 'Ahmed Ali',
      title: language === 'en' ? 'Technology Lead' : 'قائد التكنولوجيا',
      company: language === 'en' ? 'Development Team' : 'فريق التطوير',
      message: language === 'en'
        ? 'Working with Sara was smooth and organized. She communicates clearly, respects feedback, and always cares about the user-facing details.'
        : 'العمل مع سارة كان سلسا ومنظما. تتواصل بوضوح وتحترم الملاحظات وتهتم دائما بالتفاصيل الموجهة للمستخدم.',
      rating: 5,
      initials: 'AA'
    },
    {
      name: 'Omar Hassan',
      title: language === 'en' ? 'DevOps & Cloud' : 'ديفوبس والسحابة',
      company: language === 'en' ? 'Infrastructure Team' : 'فريق البنية التحتية',
      message: language === 'en'
        ? 'Sara showed real commitment during training. She learns quickly, applies feedback well, and keeps improving both code quality and UI decisions.'
        : 'أظهرت سارة التزاما حقيقيا أثناء التدريب. تتعلم بسرعة وتطبق الملاحظات بشكل جيد وتستمر في تحسين جودة الكود والواجهة.',
      rating: 5,
      initials: 'OH'
    },
    {
      name: 'Nourhan Khalil',
      title: language === 'en' ? 'Technical Analysis' : 'التحليل التقني',
      company: language === 'en' ? 'Analysis Team' : 'فريق التحليل',
      message: language === 'en'
        ? 'Her front-end work stands out for its consistency and clean structure. Sara pays attention to both usability and the overall visual experience.'
        : 'يتميز عملها الأمامي بتماسكه وبنيته النظيفة. تولي سارة اهتماما لقابلية الاستخدام والتجربة البصرية الشاملة.',
      rating: 5,
      initials: 'NK'
    },
    {
      name: 'Mai Adel Abdelaziz',
      title: language === 'en' ? 'Tech Solutions' : 'حلول التكنولوجيا',
      company: language === 'en' ? 'Solutions Provider' : 'مزود الحلول',
      message: language === 'en'
        ? 'Sara always looks for a cleaner way to present content. Her layouts feel thoughtful, modern, and aligned with what users actually need.'
        : 'تبحث سارة دائما عن طريقة أنظف لتقديم المحتوى. تشعر تخطيطاتها بأنها مدروسة وحديثة ومتوافقة مع احتياجات المستخدمين الفعلية.',
      rating: 5,
      initials: 'MA'
    },
    {
      name: 'Youssef Samir',
      title: language === 'en' ? 'Software Engineering' : 'الهندسة البرمجية',
      company: language === 'en' ? 'Engineering Team' : 'فريق الهندسة',
      message: language === 'en'
        ? 'She is reliable, disciplined, and focused on delivering solid results. Sara writes maintainable code and follows through on what she commits to.'
        : 'هي موثوقة ومنضبطة وتركز على تحقيق نتائج صلبة. تكتب سارة أكوادا قابلة للصيانة والالتزام بما تتعهد به.',
      rating: 5,
      initials: 'YS'
    }
  ]

  return (
    <section id="testimonials" className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-4">
            {language === 'en' ? 'What Others Say' : 'ماذا يقول الآخرون'}
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            {language === 'en' ? 'Client & Colleague' : 'العملاء والزملاء'}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> {language === 'en' ? 'Testimonials' : 'الشهادات'}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Read what colleagues, mentors, and partners have to say about my work, approach, and commitment to excellence.'
              : 'اقرأ ما يقوله الزملاء والمرشدون والشركاء عن عملي ونهجي والتزامي بالتميز.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-background hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Message */}
              <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">
                &ldquo;{testimonial.message}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-primary/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 pt-16 border-t border-primary/20">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">100%</p>
            <p className="text-muted-foreground">{language === 'en' ? 'Satisfaction Rate' : 'معدل الرضا'}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-secondary mb-2">6+</p>
            <p className="text-muted-foreground">{language === 'en' ? 'Testimonials' : 'شهادات'}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">5.0</p>
            <p className="text-muted-foreground">{language === 'en' ? 'Average Rating' : 'متوسط التقييم'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
