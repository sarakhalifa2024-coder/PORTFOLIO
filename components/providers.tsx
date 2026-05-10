'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/contexts/language-provider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  )
}
