'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/ui/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

export default function PropertiesPage() {
  const [filterType, setFilterType] = useState('all')
  const [filterCity, setFilterCity] = useState('all')
  const [filterFinishing, setFilterFinishing] = useState('all')
  const [filterPrice, setFilterPrice] = useState('')

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* عنوان الصفحة */}
        <section className="bg-primary text-white py-16">
          <div className="container px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">عقاراتنا</h1>
            <p className="max-w-2xl mx-auto">
              تصفح مجموعة متنوعة من العقارات المميزة في أفضل المواقع
            </p>
          </div>
        </section>
        
        {/* قسم الفلترة */}
        <section className="py-8 bg-gray-50">
          <div className="container px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">البحث والتصفية</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">نوع العقار</label>
                  <select 
                    className="w-full rounded-md border border-gray-300 py-2 px-3"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    <option value="all">جميع العقارات</option>
                    <option value="apartment">شقة</option>
                    <option value="villa">فيلا</option>
                    <option value="chalet">شاليه</option>
                    <option value="land">أرض</option>
                    <option value="office">مكتب</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">المدينة</label>
                  <select 
                    className="w-full rounded-md border border-gray-300 py-2 px-3"
                    value={filterCity}
                    onChange={(e) => setFilterCity(e.target.value)}
                  >
                    <option value="all">جميع المدن</option>
                    <option value="cairo">القاهرة</option>
                    <option value="alexandria">الإسكندرية</option>
                    <option value="north-coast">الساحل الشمالي</option>
                    <option value="ain-sokhna">العين السخنة</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">التشطيب</label>
                  <select 
                    className="w-full rounded-md border border-gray-300 py-2 px-3"
                    value={filterFinishing}
                    onChange={(e) => setFilterFinishing(e.target.value)}
                  >
                    <option value="all">جميع التشطيبات</option>
                    <option value="super-lux">سوبر لوكس</option>
                    <option value="lux">لوكس</option>
                    <option value="semi-finished">نصف تشطيب</option>
                    <option value="unfinished">بدون تشطيب</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">السعر الأقصى</label>
                  <input 
                    type="text" 
                    placeholder="السعر الأقصى" 
                    className="w-full rounded-md border border-gray-300 py-2 px-3"
                    value={filterPrice}
                    onChange={(e) => setFilterPrice(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <Button size="lg" className="w-full md:w-auto">
                  بحث
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* قائمة العقارات */}
        <section className="py-12">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* عقار 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-60 bg-gray-200">
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    للبيع
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">شقة فاخرة بالتجمع الخامس</h3>
                  <p className="text-gray-500 text-sm mb-2">التجمع الخامس، الشويفات</p>
                  <p className="text-primary font-bold text-xl mb-3">٢.٥٠٠.٠٠٠ ج.م</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      ٣ غرف
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      ٢ حمامات
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                      ١٨٠ م²
                    </span>
                  </div>
                  <Link href="/property/1">
                    <Button variant="outline" className="w-full">عرض التفاصيل</Button>
                  </Link>
                </div>
              </div>
              
              {/* عقار 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-60 bg-gray-200">
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    للبيع
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">فيلا مستقلة في المعادي</h3>
                  <p className="text-gray-500 text-sm mb-2">المعادي، دجلة</p>
                  <p className="text-primary font-bold text-xl mb-3">١٢.٠٠٠.٠٠٠ ج.م</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      ٥ غرف
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      ٤ حمامات
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                      ٤٥٠ م²
                    </span>
                  </div>
                  <Link href="/property/2">
                    <Button variant="outline" className="w-full">عرض التفاصيل</Button>
                  </Link>
                </div>
              </div>
              
              {/* عقار 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-60 bg-gray-200">
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    للبيع
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">شاليه مميز في الساحل الشمالي</h3>
                  <p className="text-gray-500 text-sm mb-2">الساحل الشمالي، مارينا</p>
                  <p className="text-primary font-bold text-xl mb-3">٣.٢٠٠.٠٠٠ ج.م</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      ٣ غرف
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      ٢ حمامات
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                      ١٥٠ م²
                    </span>
                  </div>
                  <Link href="/property/3">
                    <Button variant="outline" className="w-full">عرض التفاصيل</Button>
                  </Link>
                </div>
              </div>
              
              {/* عقار 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-60 bg-gray-200">
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    للبيع
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">شقة دوبلكس في الإسكندرية</h3>
                  <p className="text-gray-500 text-sm mb-2">سان ستيفانو، كورنيش البحر</p>
                  <p className="text-primary font-bold text-xl mb-3">٥.٥٠٠.٠٠٠ ج.م</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      ٤ غرف
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      ٣ حمامات
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                      ٢٨٠ م²
                    </span>
                  </div>
                  <Link href="/property/4">
                    <Button variant="outline" className="w-full">عرض التفاصيل</Button>
                  </Link>
                </div>
              </div>
              
              {/* عقار 5 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-60 bg-gray-200">
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    للإيجار
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">مكتب إداري في وسط البلد</h3>
                  <p className="text-gray-500 text-sm mb-2">وسط البلد، شارع قصر النيل</p>
                  <p className="text-primary font-bold text-xl mb-3">٢٥.٠٠٠ ج.م/شهر</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      ٣ غرف
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      ١ حمام
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                      ١٢٠ م²
                    </span>
                  </div>
                  <Link href="/property/5">
                    <Button variant="outline" className="w-full">عرض التفاصيل</Button>
                  </Link>
                </div>
              </div>
              
              {/* عقار 6 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-60 bg-gray-200">
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    للبيع
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">أرض استثمارية في العاصمة الإدارية</h3>
                  <p className="text-gray-500 text-sm mb-2">العاصمة الإدارية الجديدة، الحي السكني</p>
                  <p className="text-primary font-bold text-xl mb-3">٨.٠٠٠.٠٠٠ ج.م</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                      ٦٠٠ م²
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      سكني
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      مرخصة
                    </span>
                  </div>
                  <Link href="/property/6">
                    <Button variant="outline" className="w-full">عرض التفاصيل</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* الترقيم */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2 space-x-reverse">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="sr-only">السابق</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 min-w-8 bg-primary text-white hover:bg-primary/90">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 min-w-8">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 min-w-8">
                  3
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="sr-only">التالي</span>
                </Button>
              </nav>
            </div>
          </div>
        </section>
        
        {/* قسم CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">لم تجد ما تبحث عنه؟</h2>
            <p className="max-w-2xl mx-auto mb-8">
              تواصل معنا الآن واخبرنا بمتطلباتك، وسنساعدك في العثور على العقار المناسب
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                تواصل معنا
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" size="lg">
                تواصل عبر واتساب
              </Button>
            </div>
          </div>
        </section>
        
        {/* قسم الشات (سيتم تطويره لاحقًا) */}
        <div className="fixed bottom-4 right-4 z-50">
          <Button size="lg" className="rounded-full h-14 w-14 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
