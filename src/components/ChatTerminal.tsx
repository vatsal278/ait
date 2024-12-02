import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../utils/cn';

interface ChatTerminalProps {
  name: string;
  type: 'ai1' | 'ai2' | 'cognis';
  className?: string;
}

export function ChatTerminal({ name, type, className }: ChatTerminalProps) {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "relative rounded-lg overflow-hidden",
        "border border-white/10 backdrop-blur",
        "min-h-[300px] p-4",
        {
          'bg-blue-500/5': type === 'ai1',
          'bg-purple-500/5': type === 'ai2',
          'bg-emerald-500/5': type === 'cognis',
        },
        className
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-4 text-sm text-gray-400">{name}</span>
      </div>
      
      <div className="mt-8 space-y-4">
        <div className="flex items-center space-x-2">
          <div className={cn(
            "w-2 h-2 rounded-full",
            {
              'bg-blue-500': type === 'ai1',
              'bg-purple-500': type === 'ai2',
              'bg-emerald-500': type === 'cognis',
            },
            isTyping && 'animate-pulse'
          )} />
          <span className="text-sm text-gray-400">
            {isTyping ? 'Thinking...' : 'Ready'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}