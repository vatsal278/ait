import { motion } from 'framer-motion';
import { Brain, MessageCircle, Home } from 'lucide-react';
import { cn } from '../utils/cn';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: MessageCircle, label: 'Chat', href: '#chat' },
  { icon: Brain, label: 'About', href: '#about' },
];

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-8"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 text-sm text-gray-300 hover:text-white",
                  "transition-colors duration-200 ease-in-out",
                  "relative group"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}