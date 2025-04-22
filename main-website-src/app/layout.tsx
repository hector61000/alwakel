import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const cairo = Cairo({ subsets: ['arabic', 'latin'] })

export const metadata: Metadata = {
  title: 'الوكيل للتسويق العقاري والتشطيبات',
  description: 'نقدم لك أفضل العقارات الفاخرة في أرقى المناطق بأسعار تنافسية وخدمة متميزة',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cn(cairo.className, "min-h-screen bg-background")}>
        {children}
      </body>
    </html>
  )
}
