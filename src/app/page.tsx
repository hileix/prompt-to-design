'use client';

import { useState } from 'react';
import EmptyState from '../components/EmptyState';
import MainLayout from '../components/MainLayout';
import { sampleHtml } from '@/mocks/sampleHtml';

export default function Home() {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [aiHtmlResponse, setAiHtmlResponse] = useState<string | null>(null);

  // Simulated AI response function - in a real app, this would call your AI service
  const handleAiResponse = async (userMessage: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // For demo purposes, if user message contains "html", generate sample HTML
    if (userMessage.toLowerCase().includes('html')) {
      setAiHtmlResponse(sampleHtml);
      return "I've created a simple card design. You can see it in the preview area above.";
    }

    return (
      'Thanks for your message: "' +
      userMessage +
      '". If you\'d like to see a prototype, please include the word "html" in your request.'
    );
  };

  const handleSendMessage = async (userMessage: string) => {
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    // Get AI response
    const aiResponse = await handleAiResponse(userMessage);
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {!aiHtmlResponse ? (
        // Initial state - only show chat input
        <EmptyState onSendMessage={handleSendMessage} />
      ) : (
        // Full interface with preview and chat
        <MainLayout
          htmlContent={aiHtmlResponse}
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
}
