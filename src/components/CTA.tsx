import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ArrowRight, BookOpen, Mail } from 'lucide-react';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden">      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="space-y-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main CTA */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 rounded-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-primary-500/10 z-0"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Ready to Transform Your <span className="gradient-text">Dataverse Development</span>?
              </h2>
              <p className="text-xl text-slate-300 text-center mb-8 max-w-3xl mx-auto">
                Join the community of professional developers who are building better Dataverse solutions faster with XrmBedrock.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://github.com/delegateas/XrmBedrock" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-102"
                >
                  <Github size={18} />
                  <span>Star on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Workshop CTA */}
          <div className="bg-slate-800/50 p-8 md:p-12 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-500/20 p-3 rounded-full">
                  <BookOpen size={24} className="text-primary-400" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Master XrmBedrock with <span className="gradient-text">Expert Training</span>
              </h3>
              <p className="text-lg text-slate-300 text-center mb-6">
                Accelerate your team's adoption of XrmBedrock with our comprehensive workshop program. Learn best practices, advanced patterns, and insider tips directly from the experts.
              </p>
              <div className="flex justify-center">
                <a 
                  href="mailto:magesoe@gmail.com?subject=XrmBedrock%20Workshop%20Inquiry"
                  className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 hover:scale-102"
                >
                  <Mail size={18} />
                  <span>Inquire About Workshops</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;