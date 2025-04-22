'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/ui/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* عنوان الصفحة */}
        <section className="bg-primary text-white py-16">
          <div className="container px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">من نحن</h1>
            <p className="max-w-2xl mx-auto">
              تعرف على شركة الوكيل للتسويق العقاري والتشطيبات، رؤيتنا وقيمنا وفريقنا
            </p>
          </div>
        </section>
        
        {/* قسم نبذة عنا */}
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">نبذة <span className="text-primary">عنا</span></h2>
                <p className="text-gray-600 mb-4">
                  تأسست شركة الوكيل للتسويق العقاري والتشطيبات في عام 2010 على يد مجموعة من الخبراء في مجال العقارات والتشطيبات، بهدف تقديم خدمات عقارية متكاملة تلبي احتياجات السوق المصري.
                </p>
                <p className="text-gray-600 mb-4">
                  على مدار أكثر من 15 عامًا، نجحنا في بناء سمعة قوية كشركة رائدة في مجال التسويق العقاري والتشطيبات، من خلال التزامنا بتقديم خدمات عالية الجودة والمصداقية والشفافية في التعامل مع عملائنا.
                </p>
                <p className="text-gray-600 mb-4">
                  نفخر بفريقنا المحترف من الخبراء والمتخصصين في مجال العقارات والتشطيبات، الذين يعملون بجد لتحقيق رؤيتنا في أن نكون الخيار الأول للعملاء في مجال الخدمات العقارية والتشطيبات في مصر.
                </p>
                <p className="text-gray-600 mb-6">
                  نحن نؤمن بأن نجاحنا يعتمد على نجاح عملائنا، لذلك نسعى دائمًا لتقديم حلول مبتكرة وخدمات متميزة تلبي احتياجاتهم وتتجاوز توقعاتهم.
                </p>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </section>
        
        {/* قسم رؤيتنا وقيمنا */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">رؤيتنا <span className="text-primary">وقيمنا</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                نسعى لتحقيق رؤيتنا من خلال الالتزام بمجموعة من القيم الأساسية التي توجه عملنا
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                <p className="text-gray-600 mb-6">
                  أن نكون الشركة الرائدة في مجال التسويق العقاري والتشطيبات في مصر، من خلال تقديم خدمات متكاملة تلبي احتياجات العملاء وتتجاوز توقعاتهم، والمساهمة في تطوير القطاع العقاري المصري.
                </p>
                <h3 className="text-2xl font-bold mb-4">رسالتنا</h3>
                <p className="text-gray-600">
                  تقديم خدمات عقارية وتشطيبات متكاملة بأعلى معايير الجودة والاحترافية، وبناء علاقات طويلة الأمد مع عملائنا قائمة على الثقة والمصداقية والشفافية.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">قيمنا</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">النزاهة والمصداقية</h4>
                      <p className="text-gray-600">
                        نلتزم بأعلى معايير النزاهة والمصداقية في جميع تعاملاتنا، ونسعى دائمًا لبناء الثقة مع عملائنا وشركائنا.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">التميز والاحترافية</h4>
                      <p className="text-gray-600">
                        نسعى دائمًا لتقديم أفضل الخدمات بأعلى معايير الجودة والاحترافية، ونعمل باستمرار على تطوير مهاراتنا وخبراتنا.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">العمل الجماعي</h4>
                      <p className="text-gray-600">
                        نؤمن بقوة العمل الجماعي وأهمية التعاون بين أفراد الفريق لتحقيق أفضل النتائج وتقديم خدمات متميزة لعملائنا.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">رضا العملاء</h4>
                      <p className="text-gray-600">
                        نضع رضا العملاء في مقدمة أولوياتنا، ونسعى دائمًا لفهم احتياجاتهم وتلبيتها بأفضل الطرق الممكنة.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* قسم فريقنا */}
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">فريق <span className="text-primary">العمل</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                نفخر بفريقنا المحترف من الخبراء والمتخصصين في مجال العقارات والتشطيبات
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* عضو 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-1">أحمد محمد</h3>
                  <p className="text-primary font-medium mb-2">المدير التنفيذي</p>
                  <p className="text-gray-600 text-sm mb-4">
                    خبرة أكثر من 20 عامًا في مجال العقارات والتطوير العقاري
                  </p>
                  <div className="flex justify-center space-x-2 space-x-reverse">
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
                    <button className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* عضو 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-1">سارة أحمد</h3>
                  <p className="text-primary font-medium mb-2">مدير التسويق</p>
                  <p className="text-gray-600 text-sm mb-4">
                    خبرة 15 عامًا في مجال التسويق العقاري والتسويق الرقمي
                  </p>
                  <div className="flex justify-center space-x-2 space-x-reverse">
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
                    <button className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* عضو 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-1">محمد علي</h3>
                  <p className="text-primary font-medium mb-2">مدير قسم التشطيبات</p>
                  <p className="text-gray-600 text-sm mb-4">
                    مهندس معماري مع خبرة 18 عامًا في مجال التشطيبات والديكور
                  </p>
                  <div className="flex justify-center space-x-2 space-x-reverse">
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
                    <button className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* عضو 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-1">نورا حسن</h3>
                  <p className="text-primary font-medium mb-2">مدير المبيعات</p>
                  <p className="text-gray-600 text-sm mb-4">
                    خبرة 12 عامًا في مجال المبيعات العقارية وخدمة العملاء
                  </p>
                  <div className="flex justify-center space-x-2 space-x-reverse">
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
                    <button className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* قسم الإنجازات */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">إنجازاتنا <span className="text-primary">بالأرقام</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                نفخر بما حققناه من إنجازات على مدار السنوات الماضية
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">+1500</h3>
                <p className="text-gray-600 font-medium">عقار تم بيعه</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">+3000</h3>
                <p className="text-gray-600 font-medium">عميل سعيد</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">+500</h3>
                <p className="text-gray-600 font-medium">مشروع تشطيب</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">+15</h3>
                <p className="text-gray-600 font-medium">سنوات من الخبرة</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* قسم الشركاء */}
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">شركاؤنا <span className="text-primary">في النجاح</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                نفخر بشراكاتنا مع كبرى الشركات والمؤسسات في مجال العقارات والتشطيبات
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
              </div>
              <div className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
              </div>
              <div className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
              </div>
              <div className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
              </div>
              <div className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
              </div>
              <div className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* قسم CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">انضم إلى قائمة عملائنا السعداء</h2>
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
