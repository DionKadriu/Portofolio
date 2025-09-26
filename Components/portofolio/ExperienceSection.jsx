import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Barclays',
    position: 'Software Developer',
    location: 'Glasgow, UK',
    period: 'Aug 2023 – Present',
    current: true,
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    achievements: [
      'Built observability service for 8 systems using Prometheus, Telegraf, and Spring Boot APIs',
      'Engineered low-latency Flask API with caching for regression reports',
      'Created admin React UI for non-technical system owners',
      'Led migration from legacy Windows servers to OpenShift with Docker and Helm',
      'Refactored legacy Spring applications to microservices, reducing latency by 50%',
      'Won Barclays Hackathon (top 4/200 global teams) with agentic AI solution'
    ],
    technologies: ['Spring Boot', 'Flask', 'React', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana']
  },
  {
    company: 'University of Stirling',
    position: 'Teaching Assistant',
    location: 'Stirling, UK',
    period: 'Sep 2021 – Jun 2023',
    current: false,
    gradient: 'from-gray-500 to-gray-600',
    bgGradient: 'from-gray-50 to-gray-100',
    achievements: [
      'Mentored 30+ students weekly in practical labs',
      'Taught Object Oriented Programming, Data Structures, and Distributed Systems',
      'Provided hands-on support to strengthen student understanding'
    ],
    technologies: ['Java', 'Python', 'Distributed Systems']
  },
  {
    company: 'Barclays',
    position: 'Developer Intern',
    location: 'Glasgow, UK',
    period: 'Jun 2022 – Aug 2022',
    current: false,
    gradient: 'from-green-500 to-green-600',
    bgGradient: 'from-green-50 to-green-100',
    achievements: [
      'Pioneered Micronaut backend service for Kibana log exception detection',
      'Enabled real-time error context understanding for Wealth clients',
      'Improved client onboarding reliability'
    ],
    technologies: ['Micronaut', 'Kibana', 'Backend Services']
  },
  {
    company: 'LinkPlus IT',
    position: 'Software Engineer Intern',
    location: 'Prishtina, Kosovo',
    period: 'Feb 2021 – Aug 2021',
    current: false,
    gradient: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-50 to-orange-100',
    achievements: [
      'Developed backend inventory tracking system',
      'Enabled centralized device allocation management for the first time',
      'Used Spring Boot, Firebase and MinIO for robust solution'
    ],
    technologies: ['Spring Boot', 'Firebase', 'MinIO']
  }
];

export default function ExperienceSection() {
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
          <h2 className="text-5xl font-light bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Professional Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intern to senior developer, building enterprise-scale solutions 
            and leading innovative projects across fintech and education.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-gray-400 h-full rounded-full shadow-ios"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-ios flex items-center justify-center z-10 border-4 border-white">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.gradient} shadow-ios-small`}></div>
              </div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`p-8 rounded-3xl bg-gradient-to-br ${exp.bgGradient} shadow-ios hover:shadow-ios-large transition-all duration-300 border border-white/40`}
                >
                  {/* Company & Position */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} shadow-ios flex items-center justify-center`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">{exp.company}</h3>
                        {exp.current && (
                          <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-medium shadow-ios-small">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xl text-gray-700 font-medium mb-2">{exp.position}</p>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 rounded-lg bg-white/60 backdrop-blur-sm shadow-ios-small text-gray-700 text-sm font-medium border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}