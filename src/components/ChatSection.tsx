import { motion } from 'framer-motion';
import { ChatTerminal } from './ChatTerminal';

export function ChatSection() {
  return (
    <section id="chat" className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto space-y-8"
      >
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
          Interactive AI Network
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ChatTerminal name="Neural Net Alpha" type="ai1" />
          <ChatTerminal 
            name="Cognis Core" 
            type="cognis"
            className="md:translate-y-4" 
          />
          <ChatTerminal name="Quantum Beta" type="ai2" />
        </div>
      </motion.div>
    </section>
  );
}