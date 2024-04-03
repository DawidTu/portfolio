import { Outfit } from 'next/font/google'
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'David Tuma',
  description: '...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sk-SK" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaulTheme='light'>
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
        </body>
    </html>
  )
}
