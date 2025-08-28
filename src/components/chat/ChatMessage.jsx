import React from 'react'

const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user'
  const time = new Date(message.timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className={`flex items-start space-x-2 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      {/* Avatar */}
      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
        isUser 
          ? 'bg-red-500 text-white' 
          : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
      }`}>
        <i className={`fas ${isUser ? 'fa-user' : 'fa-robot'}`}></i>
      </div>

      {/* Message Content */}
      <div className={`flex flex-col max-w-xs ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`px-4 py-2 rounded-2xl shadow-sm ${
          isUser
            ? 'bg-red-500 text-white rounded-br-md'
            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-md'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 px-1">
          {time}
        </span>
      </div>
    </div>
  )
}

export default ChatMessage
