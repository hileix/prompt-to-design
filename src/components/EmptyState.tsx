import React from 'react';
import ChatInput from './ChatInput';

type EmptyStateProps = {
  onSendMessage: (message: string) => void;
};

const EmptyState: React.FC<EmptyStateProps> = ({ onSendMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
          <h1 className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">
            Design AI Assistant
          </h1>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Welcome! Ask me to create a prototype or design for you.
        </p>

        <div className="relative">
          <ChatInput onSubmit={onSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
