import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Avatar */}
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-12"
          >
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-1 shadow-ios-large">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-ios-inner">
                <span className="text-6xl font-light bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">DK</span>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-ios opacity-80"
            />
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl shadow-ios opacity-70"
            />
          </motion.div>

          {/* Name & Title */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-light bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 tracking-tight"
          >
            Dion Kadriu
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8 font-medium"
          >
            Software Engineer
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting scalable solutions with expertise in full-stack development, 
            cloud architecture, and DevOps. Currently building innovative systems 
            at Barclays with a passion for clean code and exceptional user experiences.
          </motion.p>

          {/* Contact Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <ContactButton 
              icon={Mail} 
              href="mailto:dionkkadriu@gmail.com" 
              text="dionkkadriu@gmail.com"
              gradient="from-blue-500 to-blue-600"
            />
            <ContactButton 
              icon={Linkedin} 
              href="https://linkedin.com/in/dionkadriu" 
              text="LinkedIn"
              gradient="from-blue-600 to-blue-700"
            />
            <ContactButton 
              icon={Github} 
              href="https://github.com/DionKadriu" 
              text="GitHub"
              gradient="from-gray-700 to-gray-800"
            />
            <ContactButton 
              icon={MapPin} 
              text="Glasgow, UK"
              gradient="from-gray-500 to-gray-600"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactButton({ icon: Icon, href, text, gradient }) {
  const content = (
    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-ios hover:shadow-ios-hover active:shadow-ios-pressed transition-all duration-200 cursor-pointer border border-white/40">
      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-ios-small`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <span className="text-gray-700 font-medium text-sm">{text}</span>
    </div>
  );

  return href ? (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.a>
  ) : (
    <motion.div whileHover={{ scale: 1.05, y: -2 }}>
      {content}
    </motion.div>
  );
}