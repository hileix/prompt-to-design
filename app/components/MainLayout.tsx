import React from 'react';
import ChatWindow from './ChatWindow';
import PreviewFrame from './PreviewFrame';

type Message = {
  role: 'user' | 'ai';
  content: string;
};

type MainLayoutProps = {
  htmlContent: string;
  messages: Message[];
  onSendMessage: (message: string) => void;
};

const MainLayout: React.FC<MainLayoutProps> = ({ htmlContent, messages, onSendMessage }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Preview Area */}
      <div className="w-full md:w-7/10 p-4 flex flex-col">
        <PreviewFrame htmlContent={htmlContent} />
      </div>

      {/* Chat Area */}
      <div className="w-full md:w-3/10 p-4 flex flex-col">
        <ChatWindow messages={messages} onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

export default MainLayout;
