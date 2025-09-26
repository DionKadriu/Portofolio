import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy } from 'lucide-react';

export default function EducationSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Education & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation with consistent recognition for excellence in computing science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-ios hover:shadow-ios-large transition-all duration-300 border border-white/40"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-ios flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">University of Stirling</h3>
            <div className="mb-4">
              <p className="text-xl text-gray-700 font-medium">BSc Software Engineering</p>
              <p className="text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-semibold">First Class Honours</p>
              <p className="text-gray-600">2019 – 2023 • Stirling, UK</p>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Comprehensive software engineering program covering modern development practices, 
              system design, and emerging technologies with hands-on project experience.
            </p>
          </motion.div>

          {/* Academic Excellence */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-yellow-50 to-amber-50 shadow-ios hover:shadow-ios-large transition-all duration-300 border border-white/40"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 shadow-ios flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Academic Excellence</h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-ios-small border border-white/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-ios-small">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">Excellence Award 2020/21</span>
                </div>
                <p className="text-gray-600 text-sm">Outstanding performance in Computing Science</p>
              </div>
              
              <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-ios-small border border-white/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-ios-small">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">Excellence Award 2021/22</span>
                </div>
                <p className="text-gray-600 text-sm">Continued excellence in Computing Science</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}