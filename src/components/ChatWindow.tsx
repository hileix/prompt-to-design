import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

type Message = {
  role: 'user' | 'ai';
  content: string;
};

type ChatWindowProps = {
  messages: Message[];
  onSendMessage: (message: string) => void;
};

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSendMessage }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex-1 flex flex-col overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-700 py-3 px-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">Design AI Assistant</h2>
        </div>
        <div className="flex items-center">
          {/* 可以在这里添加额外的按钮或功能，与 PreviewFrame 右侧按钮对应 */}
        </div>
      </div>

      {/* Chat Messages */}
      <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto mb-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <p>Start the conversation by sending a message</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <ChatMessage key={index} role={msg.role} content={msg.content} />
          ))
        )}
      </div>

      {/* Chat Input */}
      <ChatInput onSubmit={onSendMessage} className="p-3" />
    </div>
  );
};

export default ChatWindow;
