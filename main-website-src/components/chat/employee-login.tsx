'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [employeeId, setEmployeeId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm)
    setError('')
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    
    // هنا يمكن إضافة التحقق من صحة بيانات الدخول
    // في هذا المثال، نستخدم بيانات ثابتة للتوضيح
    
    if (employeeId === 'admin' && password === 'admin123') {
      // توجيه المدير إلى لوحة تحكم المدير
      window.location.href = '/admin-dashboard/'
    } else if (employeeId === 'emp001' && password === 'emp123') {
      // توجيه الموظف إلى لوحة تحكم الموظفين
      window.location.href = '/employee-dashboard/'
    } else {
      setError('معرف الموظف أو كلمة المرور غير صحيحة')
    }
  }
  
  return (
    <div className="fixed top-6 left-6 z-50">
      <Button 
        onClick={toggleLoginForm}
        variant="outline"
        className="bg-white text-primary border-primary hover:bg-primary/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        تسجيل دخول الموظفين
      </Button>
      
      {showLoginForm && (
        <div className="absolute top-12 left-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden mt-2">
          <div className="bg-primary text-white p-4">
            <h3 className="font-bold text-lg">تسجيل دخول الموظفين</h3>
            <p className="text-sm opacity-90">الرجاء إدخال بيانات الدخول</p>
          </div>
          
          <form onSubmit={handleLogin} className="p-4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                {error}
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-1">معرف الموظف</label>
              <input
                type="text"
                id="employeeId"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="أدخل معرف الموظف"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="أدخل كلمة المرور"
                required
              />
            </div>
            
            <div className="flex justify-between">
              <Button type="submit" className="w-full">
                تسجيل الدخول
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
