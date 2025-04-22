'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [chatStarted, setChatStarted] = useState(false)
  const [chatType, setChatType] = useState('')
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setShowOptions(true)
      setChatStarted(false)
      setChatType('')
      setMessages([])
    }
  }

  const startChat = (type) => {
    setChatType(type)
    setShowOptions(false)
    setChatStarted(true)
    
    // إضافة رسالة ترحيبية بناءً على نوع الشات
    if (type === 'buy') {
      setMessages([
        {
          id: 1,
          sender: 'agent',
          text: 'مرحباً بك في خدمة الشراء العقاري! كيف يمكنني مساعدتك اليوم؟',
          time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
        }
      ])
    } else {
      setMessages([
        {
          id: 1,
          sender: 'agent',
          text: 'مرحباً بك في خدمة البيع العقاري! أنا المدير التنفيذي وسأساعدك في عملية البيع. كيف يمكنني خدمتك؟',
          time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
        }
      ])
    }
  }

  const sendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // إضافة رسالة المستخدم
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: newMessage,
      time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    }
    
    setMessages([...messages, userMessage])
    setNewMessage('')
    
    // محاكاة رد الوكيل بعد ثانية واحدة
    setTimeout(() => {
      const agentMessage = {
        id: messages.length + 2,
        sender: 'agent',
        text: getAutoResponse(newMessage, chatType),
        time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prevMessages => [...prevMessages, agentMessage])
    }, 1000)
  }

  // دالة لإنشاء ردود تلقائية بسيطة
  const getAutoResponse = (message, type) => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('سعر') || lowerMessage.includes('تكلفة') || lowerMessage.includes('ثمن')) {
      return 'أسعارنا تنافسية وتختلف حسب الموقع والمساحة والتشطيب. هل يمكنك تحديد المنطقة التي تهتم بها؟'
    } else if (lowerMessage.includes('موقع') || lowerMessage.includes('منطقة') || lowerMessage.includes('مكان')) {
      return 'لدينا عقارات في مناطق مختلفة مثل التجمع الخامس، المعادي، مدينة نصر، 6 أكتوبر، والشيخ زايد. هل هناك منطقة محددة تفضلها؟'
    } else if (lowerMessage.includes('تشطيب') || lowerMessage.includes('ديكور')) {
      return 'نقدم خدمات تشطيب بمستويات مختلفة (عادي، لوكس، سوبر لوكس) وبأسعار تنافسية. هل تريد معرفة المزيد عن خدمات التشطيب؟'
    } else if (lowerMessage.includes('تواصل') || lowerMessage.includes('زيارة') || lowerMessage.includes('معاينة')) {
      return 'يمكننا ترتيب زيارة للعقار في الوقت المناسب لك. هل تفضل تحديد موعد الآن؟'
    } else if (lowerMessage.includes('شكرا') || lowerMessage.includes('شكراً')) {
      return 'شكراً لك! نحن دائماً في خدمتك. هل هناك أي استفسارات أخرى؟'
    } else {
      return type === 'buy' 
        ? 'شكراً لاهتمامك بخدماتنا. هل يمكنني مساعدتك بمعلومات إضافية عن العقارات المتاحة للشراء؟' 
        : 'شكراً لاهتمامك بخدماتنا. هل يمكنني مساعدتك بمعلومات إضافية عن خدمات البيع العقاري؟'
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* زر فتح الشات */}
      <Button 
        onClick={toggleChat}
        size="lg" 
        className={`rounded-full h-14 w-14 shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'}`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </Button>

      {/* نافذة الشات */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden">
          {/* رأس نافذة الشات */}
          <div className="bg-primary text-white p-4">
            <h3 className="font-bold text-lg">خدمة العملاء</h3>
            <p className="text-sm opacity-90">نحن هنا لمساعدتك</p>
          </div>

          {/* محتوى الشات */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {showOptions ? (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-gray-700 mb-6 text-center">مرحباً بك في خدمة العملاء، كيف يمكننا مساعدتك؟</p>
                <div className="flex flex-col space-y-3 w-full max-w-xs">
                  <Button 
                    onClick={() => startChat('buy')} 
                    className="bg-blue-500 hover:bg-blue-600 text-white py-3"
                  >
                    أريد شراء عقار
                  </Button>
                  <Button 
                    onClick={() => startChat('sell')} 
                    className="bg-green-500 hover:bg-green-600 text-white py-3"
                  >
                    أريد بيع عقار
                  </Button>
                </div>
              </div>
            ) : chatStarted ? (
              <div className="flex flex-col space-y-3">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-primary text-white rounded-br-none' 
                          : 'bg-gray-200 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <p>{message.text}</p>
                      <span className={`text-xs block text-left mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                        {message.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* نموذج إرسال الرسائل */}
          {chatStarted && (
            <form onSubmit={sendMessage} className="p-3 border-t border-gray-200 flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="اكتب رسالتك هنا..."
                className="flex-1 border border-gray-300 rounded-l-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button 
                type="submit" 
                className="bg-primary text-white rounded-r-lg px-4 py-2 hover:bg-primary/90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  )
}
