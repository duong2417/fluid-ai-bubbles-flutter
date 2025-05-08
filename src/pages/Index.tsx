
import { useState, useEffect } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage, MessageInputBar } from "@/components/ChatMessage";
import { FluidAI } from "@/components/FluidAI";
import { NavigationBar } from "@/components/NavigationBar";

const Index = () => {
  const [messages, setMessages] = useState<Array<{
    id: number;
    type: 'ai' | 'user';
    content: string;
    isAudio?: boolean;
    timestamp?: string;
  }>>([]);
  
  const [isTyping, setIsTyping] = useState(false);

  // Simulate initial messages loading
  useEffect(() => {
    // Clear any existing messages
    setMessages([]);
    
    // Add welcome message
    setTimeout(() => {
      setMessages([{
        id: 1,
        type: 'ai',
        content: "Hello! I'm AI Lingo Talk. I can be your conversation partner. Tap the microphone button to start speaking.",
        isAudio: false,
        timestamp: '23:51'
      }]);
      
      // Add second message after a delay
      setTimeout(() => {
        setIsTyping(true);
        
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: 2,
            type: 'ai',
            content: "Hi. I'm Riley, your personal language coach. Are you ready to learn?",
            isAudio: true,
            timestamp: '23:52'
          }]);
          
          // Add user response
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: 3,
              type: 'user',
              content: "Hello?",
              timestamp: '23:53'
            }]);
            
            // Add AI response
            setTimeout(() => {
              setIsTyping(true);
              
              setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, {
                  id: 4,
                  type: 'ai',
                  content: "Hello. Nice to meet you. How are you today?",
                  isAudio: true,
                  timestamp: '23:54'
                }]);
              }, 2000);
            }, 1000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 1000);
  }, []);

  return (
    <div className="chat-container min-h-screen pb-24">
      {/* Header */}
      <ChatHeader />
      
      {/* Main chat area */}
      <div className="pt-[130px] pb-[140px] px-4">
        {/* Messages */}
        <div className="flex flex-col">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              type={msg.type}
              message={msg.content}
              isAudio={msg.isAudio}
              isTyping={isTyping && msg.id === messages.length}
              timestamp={msg.timestamp}
            />
          ))}
          
          {isTyping && messages.length > 0 && (
            <div className="flex w-full mb-4 justify-start">
              <div className="mr-2 flex-shrink-0">
                <FluidAI size="sm" isActive={true} />
              </div>
              <div className="message-bubble-ai px-4 py-3 max-w-[80%]">
                <div className="flex items-center mb-1 text-ai-blue-dark">
                  <span className="text-xs font-medium mr-2">🎤 AI Lingo</span>
                  <div className="speaking-animation ml-1">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <p className="text-sm h-4"></p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Input area */}
      <MessageInputBar />
      
      {/* Navigation bar */}
      <NavigationBar />
    </div>
  );
};

export default Index;
