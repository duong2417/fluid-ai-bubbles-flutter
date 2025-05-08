
import { cn } from "@/lib/utils";
import { FluidAI } from "./FluidAI";
import { Mic } from "lucide-react";

type MessageType = 'ai' | 'user';

interface ChatMessageProps {
  type: MessageType;
  message: string;
  isAudio?: boolean;
  isTyping?: boolean;
  timestamp?: string;
}

export function ChatMessage({ 
  type, 
  message, 
  isAudio = false, 
  isTyping = false,
  timestamp
}: ChatMessageProps) {
  const isAI = type === 'ai';

  return (
    <div className={cn(
      "flex w-full mb-4",
      isAI ? "justify-start" : "justify-end"
    )}>
      {/* AI Icon - only shown for AI messages */}
      {isAI && (
        <div className="mr-2 flex-shrink-0">
          <FluidAI 
            size="sm"
            isActive={isTyping}
            isPulsing={isAudio}
          />
        </div>
      )}
      
      {/* Message content */}
      <div className={cn(
        "px-4 py-3 max-w-[80%]",
        isAI ? "message-bubble-ai" : "message-bubble-user",
        isAI ? "text-gray-800" : "text-white"
      )}>
        {/* Message header if needed */}
        {isAI && (
          <div className="flex items-center mb-1 text-ai-blue-dark">
            <span className="text-xs font-medium mr-2">
              {isAudio ? "🎤 AI Lingo" : "💬 AI Lingo"}
            </span>
            {isTyping && (
              <div className="speaking-animation ml-1">
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </div>
        )}
        
        {/* Actual message text */}
        <p className="text-sm">{message}</p>
        
        {/* Timestamp if provided */}
        {timestamp && (
          <div className="text-right mt-1">
            <span className={cn(
              "text-xs opacity-70",
              isAI ? "text-gray-500" : "text-gray-100"
            )}>
              {timestamp}
            </span>
          </div>
        )}
      </div>

      {/* User Icon - only shown for user messages */}
      {!isAI && (
        <div className="ml-2 h-8 w-8 rounded-full bg-white flex-shrink-0 flex items-center justify-center">
          <div className="h-7 w-7 rounded-full bg-ai-blue-dark flex items-center justify-center text-white text-xs">
            You
          </div>
        </div>
      )}
    </div>
  );
}

export function MessageInputBar() {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm border-t border-gray-200 p-4 sticky bottom-0">
      <div className="flex items-center justify-center">
        <p className="text-ai-blue-dark mb-2">Tap the microphone to start a conversation</p>
      </div>
      <div className="flex justify-center">
        <button className="mic-button h-16 w-16 rounded-full flex items-center justify-center text-white">
          <Mic size={28} />
        </button>
      </div>
    </div>
  );
}
