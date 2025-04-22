'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/ui/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FinishingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* عنوان الصفحة */}
        <section className="bg-primary text-white py-16">
          <div className="container px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">خدمات التشطيبات</h1>
            <p className="max-w-2xl mx-auto">
              نقدم خدمات تشطيب متكاملة بأعلى معايير الجودة وأحدث التصميمات العصرية
            </p>
          </div>
        </section>
        
        {/* قسم مقدمة عن التشطيبات */}
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">تشطيبات <span className="text-primary">عالية الجودة</span></h2>
                <p className="text-gray-600 mb-4">
                  نحن متخصصون في تقديم خدمات التشطيب المتكاملة للمنازل والفلل والشركات والمكاتب. نعمل مع فريق من المهندسين والمصممين المحترفين لتقديم أفضل النتائج التي تلبي تطلعات عملائنا.
                </p>
                <p className="text-gray-600 mb-4">
                  نستخدم أفضل الخامات وأحدث التقنيات لضمان تشطيبات عالية الجودة تدوم لسنوات طويلة. كما نلتزم بالمواعيد المحددة وبالميزانية المتفق عليها.
                </p>
                <p className="text-gray-600 mb-6">
                  سواء كنت تبحث عن تشطيب كامل لمنزلك الجديد أو تجديد منزلك الحالي، فنحن هنا لمساعدتك في تحويل أفكارك إلى واقع ملموس.
                </p>
                <Button size="lg">تواصل معنا للاستشارة</Button>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </section>
        
        {/* قسم خدمات التشطيب */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">خدمات <span className="text-primary">التشطيب</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                نقدم مجموعة متكاملة من خدمات التشطيب لتلبية جميع احتياجاتك
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* خدمة 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">تشطيب كامل</h3>
                <p className="text-gray-600 mb-6">
                  نقدم خدمات التشطيب الكامل للوحدات السكنية والتجارية، بدءًا من الأعمال الإنشائية وحتى أدق التفاصيل الديكورية.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    أعمال السباكة والكهرباء
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تركيب الأرضيات والسيراميك
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    دهانات وتشطيبات الحوائط
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تركيب الأبواب والنوافذ
                  </li>
                </ul>
                <Button variant="outline" className="w-full">المزيد من التفاصيل</Button>
              </div>
              
              {/* خدمة 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">أعمال الديكور</h3>
                <p className="text-gray-600 mb-6">
                  نقدم خدمات تصميم وتنفيذ الديكورات الداخلية بأحدث الأساليب والتصميمات العصرية التي تناسب ذوقك واحتياجاتك.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تصميم وتنفيذ الأسقف المعلقة
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تصميم وحدات الإضاءة
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تصميم وتنفيذ قطع الأثاث المخصصة
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    اختيار الألوان والخامات المناسبة
                  </li>
                </ul>
                <Button variant="outline" className="w-full">المزيد من التفاصيل</Button>
              </div>
              
              {/* خدمة 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">تصميم المطابخ</h3>
                <p className="text-gray-600 mb-6">
                  نقدم خدمات تصميم وتنفيذ المطابخ العصرية بأحدث التصميمات والخامات عالية الجودة التي تجمع بين الأناقة والعملية.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تصميم مطابخ حسب المساحة المتاحة
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    اختيار الخامات والألوان المناسبة
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تركيب الأجهزة والإكسسوارات
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تصميم وحدات تخزين ذكية
                  </li>
                </ul>
                <Button variant="outline" className="w-full">المزيد من التفاصيل</Button>
              </div>
              
              {/* خدمة 4 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">تصميم الحمامات</h3>
                <p className="text-gray-600 mb-6">
                  نقدم خدمات تصميم وتنفيذ الحمامات العصرية بأحدث التصميمات والخامات عالية الجودة التي تجمع بين الراحة والأناقة.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تصميم حمامات حسب المساحة المتاحة
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    اختيار السيراميك والأدوات الصحية
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تركيب الإكسسوارات والمرايا
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تصميم وحدات تخزين مناسبة
                  </li>
                </ul>
                <Button variant="outline" className="w-full">المزيد من التفاصيل</Button>
              </div>
              
              {/* خدمة 5 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">أنظمة الإضاءة</h3>
                <p className="text-gray-600 mb-6">
                  نقدم خدمات تصميم وتنفيذ أنظمة الإضاءة الذكية التي تجمع بين الوظيفة والجمال، وتوفر أجواء مريحة ومناسبة لكل غرفة.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تصميم إضاءة مناسبة لكل غرفة
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تركيب أنظمة الإضاءة الذكية
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    توفير الطاقة وخفض التكاليف
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    إضاءة ديكورية وجمالية
                  </li>
                </ul>
                <Button variant="outline" className="w-full">المزيد من التفاصيل</Button>
              </div>
              
              {/* خدمة 6 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">أنظمة المنزل الذكي</h3>
                <p className="text-gray-600 mb-6">
                  نقدم خدمات تركيب وبرمجة أنظمة المنزل الذكي التي تتيح لك التحكم في منزلك عن بعد وتوفير الطاقة وزيادة الأمان.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    أنظمة التحكم في الإضاءة
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    أنظمة التحكم في درجة الحرارة
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    أنظمة الأمان والمراقبة
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    أنظمة الصوت والترفيه
                  </li>
                </ul>
                <Button variant="outline" className="w-full">المزيد من التفاصيل</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* قسم مراحل التشطيب */}
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">مراحل <span className="text-primary">التشطيب</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                نتبع منهجية احترافية في تنفيذ مشاريع التشطيب لضمان أفضل النتائج
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-4 right-1/2 transform translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">التخطيط والتصميم</h3>
                <p className="text-gray-600">
                  نبدأ بفهم احتياجاتك وتطلعاتك، ثم نقوم بإعداد التصاميم والمخططات التفصيلية للمشروع.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-4 right-1/2 transform translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">تحديد الميزانية</h3>
                <p className="text-gray-600">
                  نقوم بإعداد تقدير تكلفة تفصيلي للمشروع، ونعمل معك لتحديد الميزانية المناسبة وخطة الدفع.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-4 right-1/2 transform translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">التنفيذ</h3>
                <p className="text-gray-600">
                  نبدأ في تنفيذ المشروع وفقًا للخطة والتصميم المتفق عليهما، مع الالتزام بأعلى معايير الجودة والدقة.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-4 right-1/2 transform translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">التسليم والضمان</h3>
                <p className="text-gray-600">
                  نقوم بتسليم المشروع بعد التأكد من جودة التنفيذ ومطابقته للمواصفات، مع تقديم ضمان على جميع الأعمال.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* قسم معرض الأعمال */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">معرض <span className="text-primary">أعمالنا</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                نفخر بتقديم بعض من أعمالنا السابقة التي تعكس جودة خدماتنا واحترافيتنا
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">فيلا فاخرة بالتجمع الخامس</h3>
                  <p className="text-gray-600 mb-2">تشطيب كامل - تصميم داخلي</p>
                  <Button variant="link" className="text-primary p-0">عرض المزيد</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">شقة دوبلكس بالمعادي</h3>
                  <p className="text-gray-600 mb-2">تشطيب كامل - تصميم داخلي</p>
                  <Button variant="link" className="text-primary p-0">عرض المزيد</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">مكتب إداري بوسط البلد</h3>
                  <p className="text-gray-600 mb-2">تشطيب كامل - تصميم داخلي</p>
                  <Button variant="link" className="text-primary p-0">عرض المزيد</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">شقة بمدينة نصر</h3>
                  <p className="text-gray-600 mb-2">تشطيب كامل - تصميم داخلي</p>
                  <Button variant="link" className="text-primary p-0">عرض المزيد</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">مطعم بالمهندسين</h3>
                  <p className="text-gray-600 mb-2">تشطيب كامل - تصميم داخلي</p>
                  <Button variant="link" className="text-primary p-0">عرض المزيد</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">فيلا بالشروق</h3>
                  <p className="text-gray-600 mb-2">تشطيب كامل - تصميم داخلي</p>
                  <Button variant="link" className="text-primary p-0">عرض المزيد</Button>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button variant="outline" size="lg">
                عرض جميع الأعمال
              </Button>
            </div>
          </div>
        </section>
        
        {/* قسم CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى خدمات تشطيب احترافية؟</h2>
            <p className="max-w-2xl mx-auto mb-8">
              تواصل معنا الآن واحصل على استشارة مجانية من خبرائنا
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
