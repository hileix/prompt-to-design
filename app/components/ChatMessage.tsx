import React from 'react';

type ChatMessageProps = {
  role: 'user' | 'ai';
  content: string;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          role === 'user'
            ? 'bg-indigo-600 text-white rounded-br-none'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;
