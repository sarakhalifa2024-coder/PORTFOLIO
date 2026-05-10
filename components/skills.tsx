'use client'

import { useEffect, useState } from 'react'
import { 
  Code2, 
  Database, 
  Zap,
  FileCode,
  Palette,
  Braces,
  Package,
  GitBranch,
  Terminal
} from 'lucide-react'
import { translations } from '@/lib/translations'
import { useLanguage } from '@/contexts/language-provider'

export function Skills() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const skillCategories = [
    {
      title: language === 'en' ? 'Frontend' : 'الواجهة الأمامية',
      icon: Code2,
      skills: [
        { name: 'HTML5', icon: FileCode },
        { name: 'CSS3', icon: Palette },
        { name: 'JavaScript (ES6+)', icon: Braces },
        { name: 'TypeScript', icon: Braces },
        { name: 'React.js', icon: Code2 },
        { name: 'Responsive Design', icon: Palette },
        { name: 'Tailwind CSS', icon: Palette }
      ]
    },
    {
      title: language === 'en' ? 'Backend' : 'الواجهة الخلفية',
      icon: Database,
      skills: [
        { name: 'Node.js', icon: Terminal },
        { name: 'Express.js', icon: Code2 },
        { name: 'RESTful APIs', icon: Package },
        { name: 'MongoDB', icon: Database },
        { name: 'Authentication', icon: Zap },
        { name: 'Database Design', icon: Database }
      ]
    },
    {
      title: language === 'en' ? 'Tools & Workflow' : 'الأدوات والعمليات',
      icon: Zap,
      skills: [
        { name: 'Git & GitHub', icon: GitBranch },
        { name: 'VS Code', icon: FileCode },
        { name: 'npm/pnpm', icon: Package },
        { name: 'Problem Solving', icon: Braces },
        { name: 'Testing', icon: Zap },
        { name: 'DevTools', icon: Terminal }
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.technicalSkills}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.skillsSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => {
                    const SkillIcon = skill.icon
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-card rounded-full text-sm font-semibold text-foreground border border-primary/20 hover:border-primary/50 transition-all hover:shadow-md hover:shadow-primary/20 group-hover:text-primary cursor-default"
                      >
                        <SkillIcon className="w-4 h-4 text-primary" />
                        <span>{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Skill Proficiency */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-8">{t.proficiencyLevel}</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'React.js', level: 85 },
              { name: 'JavaScript/TypeScript', level: 80 },
              { name: 'Node.js & Express', level: 75 },
              { name: 'MongoDB', level: 75 },
              { name: 'HTML & CSS', level: 90 },
              { name: 'API Integration', level: 85 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-sm font-bold text-primary">{skill.level}%</span>
                </div>
                <div className="w-full h-4 bg-muted rounded-full overflow-hidden border border-primary/20">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-700 shadow-lg shadow-primary/50"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
