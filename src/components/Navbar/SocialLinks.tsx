import { Github, Twitter, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: FileText, label: 'Docs', href: '#' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: ExternalLink, label: 'Demo', href: '#' },
];

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-gray-400 hover:text-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
}