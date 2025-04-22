'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Search, Phone } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // في المستقبل سنضيف تنفيذ فعلي لوضع الليل
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">الوكيل</span>
            <span className="hidden md:inline-block text-lg">للتسويق العقاري والتشطيبات</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              الرئيسية
            </Link>
            <Link href="/properties" className="text-sm font-medium transition-colors hover:text-primary">
              العقارات
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              خدماتنا
            </Link>
            <Link href="/finishing" className="text-sm font-medium transition-colors hover:text-primary">
              التشطيبات
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              من نحن
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              اتصل بنا
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="hidden md:flex">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">تفعيل وضع الليل</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">البحث</span>
          </Button>
          
          <Link href="tel:01070825991" className="hidden md:flex items-center gap-2 text-sm font-medium">
            <Phone className="h-4 w-4" />
            <span>010 70 82 5991</span>
          </Link>
          
          <Link href="https://wa.me/201070825991" className="hidden md:flex">
            <Button variant="outline" size="sm">
              واتساب
            </Button>
          </Link>
          
          <Link href="/login">
            <Button variant="default" size="sm">
              تسجيل الدخول
            </Button>
          </Link>
          
          {/* زر القائمة للشاشات الصغيرة */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">القائمة</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
