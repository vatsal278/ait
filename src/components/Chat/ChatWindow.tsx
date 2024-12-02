import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ChatWindowProps {
  name: string;
  type: 'ai1' | 'ai2' | 'cognis';
  messages: Array<{ text: string; timestamp: string }>;
}

export function ChatWindow({ name, type, messages }: ChatWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "rounded-lg overflow-hidden backdrop-blur-md",
        "border border-white/10",
        "flex flex-col h-[300px]",
        {
          'bg-gradient-to-br from-blue-500/10 to-purple-500/10': type === 'ai1',
          'bg-gradient-to-br from-purple-500/10 to-pink-500/10': type === 'ai2',
          'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10': type === 'cognis',
        }
      )}
    >
      <div className="flex items-center p-4 border-b border-white/10">
        <Brain className="w-5 h-5 mr-2" />
        <span className="font-medium text-white">{name}</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-black/20 rounded-lg p-3">
            <p className="text-white/90">{msg.text}</p>
            <span className="text-xs text-white/50">{msg.timestamp}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}