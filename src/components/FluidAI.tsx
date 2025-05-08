
import { useRef, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface FluidAIProps {
  isActive?: boolean;
  isPulsing?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function FluidAI({ isActive = false, isPulsing = false, size = 'md', className }: FluidAIProps) {
  const [amplitude, setAmplitude] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Simulate audio frequency changes
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setAmplitude(Math.random() * 0.5 + 0.7);
      }, 200);
      
      return () => clearInterval(interval);
    }
    
    return () => {};
  }, [isActive]);

  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  };

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center",
        sizeMap[size],
        className
      )}
    >
      {/* Main blob */}
      <div 
        className={cn(
          "absolute bg-ai-blue rounded-full flex items-center justify-center animate-blob",
          sizeMap[size],
          isActive ? "opacity-100" : "opacity-70",
          isPulsing && "animate-pulse-slow"
        )}
        style={{ 
          transform: isActive ? `scale(${amplitude})` : 'scale(1)',
          transition: 'transform 0.2s ease-in-out'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-30 rounded-full blur-sm"></div>
      </div>
      
      {/* Ripple effect */}
      <div 
        className={cn(
          "absolute w-full h-full rounded-full border-2 border-ai-blue border-opacity-30",
          isActive && "animate-ripple"
        )}
      ></div>
      
      {/* Inner content - icon */}
      <div className="relative z-10 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.5v-3c-4.2 0-7-1.8-8.5-5.5 2 3.6 4.45 5 8.5 5v-3l4.5 3.5-4.5 3z" />
        </svg>
      </div>
      
      {/* Extra ripple effect for speaking state */}
      {isActive && (
        <>
          <div className="absolute w-full h-full animate-ripple opacity-40 rounded-full border border-ai-blue delay-300"></div>
          <div className="absolute w-[90%] h-[90%] animate-ripple opacity-30 rounded-full border border-ai-blue delay-600"></div>
        </>
      )}
    </div>
  );
}
