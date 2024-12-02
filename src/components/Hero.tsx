import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8 max-w-4xl mx-auto px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center"
        >
          <Brain className="w-10 h-10 text-white" />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
            Next-Gen AI
          </span>
          <br />
          <span className="text-white">Interface</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Experience the future of AI interaction with our advanced neural network system.
          Connect with multiple AI agents working in harmony through our innovative interface.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#chat"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Start Chat
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}