import { useState } from 'react';
import { ChatWindow } from './ChatWindow';
import { ChatInput } from './ChatInput';
import { motion } from 'framer-motion';

const INITIAL_MESSAGES = {
  ai1: [{ text: "Neural Net Alpha initialized and ready", timestamp: "Now" }],
  ai2: [{ text: "Quantum Beta systems online", timestamp: "Now" }],
  cognis: [{ text: "Cognis Hive Mind consciousness activated", timestamp: "Now" }],
};

export function ChatLayout() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  const handleSend = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setMessages(prev => ({
      ai1: [...prev.ai1, { text: `Processing: ${message}`, timestamp }],
      ai2: [...prev.ai2, { text: `Analyzing: ${message}`, timestamp }],
      cognis: [...prev.cognis, { text: `Synthesizing insights: ${message}`, timestamp }],
    }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChatWindow name="Neural Net Alpha" type="ai1" messages={messages.ai1} />
        <ChatWindow name="Quantum Beta" type="ai2" messages={messages.ai2} />
      </div>
      
      <ChatWindow 
        name="Cognis Hive Mind" 
        type="cognis" 
        messages={messages.cognis}
      />
      
      <ChatInput onSend={handleSend} />
    </motion.div>
  );
}