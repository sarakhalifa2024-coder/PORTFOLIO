import { useEffect, useState } from 'react'

export function useLanguage() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('language') as 'en' | 'ar' | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }

    const handleStorageChange = () => {
      const newLanguage = localStorage.getItem('language') as 'en' | 'ar' | null
      if (newLanguage) {
        setLanguage(newLanguage)
      }
    }

    // Listen for language changes
    window.addEventListener('storage', handleStorageChange)
    
    // Also listen for custom events
    window.addEventListener('languagechange', (e: any) => {
      setLanguage(e.detail)
    })

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('languagechange', () => {})
    }
  }, [])

  return { language, mounted }
}
