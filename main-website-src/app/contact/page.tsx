'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/ui/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* عنوان الصفحة */}
        <section className="bg-primary text-white py-16">
          <div className="container px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
            <p className="max-w-2xl mx-auto">
              نحن هنا لمساعدتك، تواصل معنا وسنرد على استفساراتك في أقرب وقت ممكن
            </p>
          </div>
        </section>
        
        {/* قسم معلومات الاتصال والنموذج */}
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* معلومات الاتصال */}
              <div>
                <h2 className="text-3xl font-bold mb-6">معلومات <span className="text-primary">الاتصال</span></h2>
                <p className="text-gray-600 mb-8">
                  يمكنك التواصل معنا من خلال وسائل الاتصال المختلفة أو زيارة مكتبنا مباشرة. كما يمكنك ملء نموذج الاتصال وسنقوم بالرد عليك في أقرب وقت ممكن.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">العنوان</h3>
                      <p className="text-gray-600">
                        القاهرة، المقطم، الهضبة الوسطى الحي الرابع امام كومباوند ديار سيتي 2
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">الهاتف</h3>
                      <p className="text-gray-600">
                        01070825991
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">البريد الإلكتروني</h3>
                      <p className="text-gray-600">
                        alwakeeproperties@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">ساعات العمل</h3>
                      <p className="text-gray-600">
                        السبت - الخميس: 9:00 صباحًا - 5:00 مساءً
                      </p>
                      <p className="text-gray-600">
                        الجمعة: مغلق
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">تابعنا على وسائل التواصل الاجتماعي</h3>
                  <div className="flex space-x-4 space-x-reverse">
                    <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* نموذج الاتصال */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="أدخل اسمك"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">الموضوع</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="أدخل موضوع الرسالة"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <span className="mr-2 text-sm text-gray-600">
                        أوافق على سياسة الخصوصية وشروط الاستخدام
                      </span>
                    </label>
                  </div>
                  
                  <Button className="w-full">إرسال الرسالة</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* قسم الخريطة */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">موقعنا <span className="text-primary">على الخريطة</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                يمكنك زيارتنا في مكتبنا الرئيسي في وسط القاهرة
              </p>
            </div>
            
            <div className="h-96 bg-gray-200 rounded-lg"></div>
          </div>
        </section>
        
        {/* قسم الأسئلة الشائعة */}
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">الأسئلة <span className="text-primary">الشائعة</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                إليك بعض الإجابات على الأسئلة الشائعة التي قد تكون لديك
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">ما هي ساعات العمل الخاصة بكم؟</h3>
                <p className="text-gray-600">
                  نعمل من السبت إلى الخميس من الساعة 9:00 صباحًا حتى 5:00 مساءً. الجمعة مغلق.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">هل تقدمون خدمات التقييم العقاري؟</h3>
                <p className="text-gray-600">
                  نعم، نقدم خدمات التقييم العقاري الاحترافية لجميع أنواع العقارات بأسعار تنافسية.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">كم تستغرق عملية التشطيب؟</h3>
                <p className="text-gray-600">
                  تختلف مدة التشطيب حسب حجم المشروع ونوعه، ولكن عادة ما تستغرق من 2-6 أشهر للوحدات السكنية.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">هل تقدمون ضمانات على أعمال التشطيب؟</h3>
                <p className="text-gray-600">
                  نعم، نقدم ضمانًا لمدة سنة على جميع أعمال التشطيب، وضمانات إضافية على بعض الأعمال الخاصة.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">هل يمكنني الحصول على استشارة مجانية؟</h3>
                <p className="text-gray-600">
                  نعم، نقدم استشارات مجانية للعملاء المحتملين. يمكنك حجز موعد من خلال الاتصال بنا.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">هل تقدمون خدمات خارج القاهرة؟</h3>
                <p className="text-gray-600">
                  نعم، نقدم خدماتنا في جميع أنحاء مصر، مع التركيز على القاهرة الكبرى والإسكندرية والساحل الشمالي.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* قسم CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد للتواصل معنا؟</h2>
            <p className="max-w-2xl mx-auto mb-8">
              نحن هنا لمساعدتك في جميع احتياجاتك العقارية والتشطيبات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                اتصل بنا الآن
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
