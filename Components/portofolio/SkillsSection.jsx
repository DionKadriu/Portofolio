import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Monitor, Award } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Java', 'Python', 'JavaScript'],
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100'
  },
  {
    title: 'Frameworks',
    icon: Server,
    skills: ['Spring Boot', 'Flask', 'React'],
    gradient: 'from-green-500 to-green-600',
    bgGradient: 'from-green-50 to-green-100'
  },
  {
    title: 'DevOps',
    icon: Monitor,
    skills: ['Docker', 'Kubernetes', 'Helm', 'Jenkins', 'GitLab CI'],
    gradient: 'from-gray-600 to-gray-700',
    bgGradient: 'from-gray-50 to-gray-100'
  },
  {
    title: 'Cloud & Monitoring',
    icon: Cloud,
    skills: ['AWS', 'Azure', 'OpenShift', 'Prometheus', 'Grafana', 'Telegraf'],
    gradient: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-50 to-orange-100'
  }
];

const certifications = [
  'AWS Developer Associate (Nov 2024)',
  'AWS Cloud Practitioner (Feb 2024)'
];

export default function SkillsSection() {
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
          <h2 className="text-5xl font-light bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-stack development with enterprise-grade solutions, 
            from frontend React applications to scalable backend services and cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${category.bgGradient} shadow-ios hover:shadow-ios-large transition-all duration-300 border border-white/40`}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.gradient} shadow-ios flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm shadow-ios-small text-center border border-white/30"
                  >
                    <span className="text-gray-700 font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-ios max-w-2xl mx-auto border border-white/40">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-ios flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 rounded-xl bg-white/60 backdrop-blur-sm shadow-ios-small border border-white/30"
                >
                  <span className="text-gray-700 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}