'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/ui/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('details')
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* صور العقار */}
        <section className="bg-gray-100 py-8">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-96 bg-gray-200 rounded-lg"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-44 bg-gray-200 rounded-lg"></div>
                <div className="h-44 bg-gray-200 rounded-lg"></div>
                <div className="h-44 bg-gray-200 rounded-lg"></div>
                <div className="h-44 bg-gray-200 rounded-lg relative">
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                    <span className="text-white text-lg font-bold">+5 صور</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* معلومات العقار */}
        <section className="py-8">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* القسم الرئيسي */}
              <div className="lg:col-span-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">شقة فاخرة بالتجمع الخامس</h1>
                    <p className="text-gray-500">التجمع الخامس، الشويفات</p>
                  </div>
                  <div className="text-left">
                    <p className="text-primary font-bold text-3xl">٢.٥٠٠.٠٠٠ ج.م</p>
                    <p className="text-gray-500 text-sm">١٣,٨٨٩ ج.م / م²</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>٣ غرف</span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>٢ حمامات</span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <span>١٨٠ م²</span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span>سوبر لوكس</span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>منذ ٣ أيام</span>
                  </div>
                  <div className="flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>للبيع</span>
                  </div>
                </div>
                
                {/* التبويبات */}
                <div className="border-b border-gray-200 mb-6">
                  <div className="flex space-x-8 space-x-reverse">
                    <button 
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'details' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      onClick={() => setActiveTab('details')}
                    >
                      التفاصيل
                    </button>
                    <button 
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'features' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      onClick={() => setActiveTab('features')}
                    >
                      المميزات
                    </button>
                    <button 
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'location' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      onClick={() => setActiveTab('location')}
                    >
                      الموقع
                    </button>
                    <button 
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'video' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      onClick={() => setActiveTab('video')}
                    >
                      فيديو
                    </button>
                  </div>
                </div>
                
                {/* محتوى التبويبات */}
                <div className="mb-8">
                  {activeTab === 'details' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">وصف العقار</h2>
                      <p className="text-gray-600 mb-4">
                        شقة فاخرة للبيع في التجمع الخامس، منطقة الشويفات، بمساحة 180 متر مربع، تتكون من 3 غرف نوم و2 حمام وريسبشن كبير ومطبخ مجهز بالكامل. الشقة بتشطيب سوبر لوكس وتطل على حديقة.
                      </p>
                      <p className="text-gray-600 mb-4">
                        تقع الشقة في الدور الثالث من عمارة حديثة البناء، ويوجد مصعد وأمن على مدار 24 ساعة. قريبة من جميع الخدمات والمواصلات.
                      </p>
                      <p className="text-gray-600 mb-4">
                        مميزات الشقة:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                        <li>تشطيب سوبر لوكس</li>
                        <li>تكييفات في جميع الغرف</li>
                        <li>مطبخ مجهز بالكامل</li>
                        <li>إطلالة على حديقة</li>
                        <li>قريبة من المواصلات والخدمات</li>
                        <li>أمن 24 ساعة</li>
                        <li>مصعد</li>
                      </ul>
                      <p className="text-gray-600">
                        السعر: 2,500,000 جنيه مصري (قابل للتفاوض)
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 'features' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">مميزات العقار</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>تكييف مركزي</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>مطبخ مجهز</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>إنترنت فائق السرعة</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>نظام أمان</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>موقف سيارات</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>مصعد</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>إطلالة على حديقة</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>قريب من المواصلات</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>أمن 24 ساعة</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>شرفة</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>قريب من المدارس</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>قريب من المراكز التجارية</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'location' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">موقع العقار</h2>
                      <div className="h-96 bg-gray-200 rounded-lg mb-4"></div>
                      <p className="text-gray-600">
                        يقع العقار في منطقة الشويفات بالتجمع الخامس، على بعد دقائق من الطريق الدائري الأوسطي وطريق السويس. المنطقة هادئة وراقية وقريبة من جميع الخدمات الأساسية مثل المدارس والمستشفيات والمراكز التجارية.
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 'video' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">فيديو العقار</h2>
                      <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* القسم الجانبي */}
              <div>
                {/* بطاقة الاتصال */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 sticky top-20">
                  <h3 className="text-lg font-bold mb-4">تواصل مع المعلن</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full ml-3"></div>
                    <div>
                      <p className="font-bold">أحمد محمد</p>
                      <p className="text-gray-500 text-sm">وكيل عقاري</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <Button className="w-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      اتصل الآن
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      واتساب
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      إرسال رسالة
                    </Button>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-500 text-sm mb-2">مشاركة العقار:</p>
                    <div className="flex space-x-2 space-x-reverse">
                      <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* عقارات مشابهة */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">عقارات مشابهة</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-20 h-20 bg-gray-200 rounded-md ml-3"></div>
                      <div>
                        <h4 className="font-bold text-sm">شقة في التجمع الخامس</h4>
                        <p className="text-primary text-sm font-bold">٢.٢٠٠.٠٠٠ ج.م</p>
                        <p className="text-gray-500 text-xs">٣ غرف - ١٦٠ م²</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-20 h-20 bg-gray-200 rounded-md ml-3"></div>
                      <div>
                        <h4 className="font-bold text-sm">شقة في الرحاب</h4>
                        <p className="text-primary text-sm font-bold">٢.٨٠٠.٠٠٠ ج.م</p>
                        <p className="text-gray-500 text-xs">٣ غرف - ١٧٥ م²</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-20 h-20 bg-gray-200 rounded-md ml-3"></div>
                      <div>
                        <h4 className="font-bold text-sm">شقة في مدينة نصر</h4>
                        <p className="text-primary text-sm font-bold">٢.١٠٠.٠٠٠ ج.م</p>
                        <p className="text-gray-500 text-xs">٣ غرف - ١٧٠ م²</p>
                      </div>
                    </div>
                    <Link href="/properties" className="text-primary text-sm font-medium block text-center">
                      عرض المزيد
                    </Link>
                  </div>
                </div>
              </div>
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
