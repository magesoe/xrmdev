import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Workflow } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="animated-bg"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Elevate Your <span className="gradient-text">Dataverse</span> Development
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              XrmBedrock provides professional developers with powerful tools and streamlined workflows that go beyond Microsoft's standard offerings.
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="https://github.com/delegateas/XrmBedrock" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
            <a 
              href="#features" 
              className="gradient-border bg-slate-900 text-white px-8 py-3 rounded-lg font-medium transition-all w-full sm:w-auto justify-center flex"
            >
              Explore Features
            </a>
          </motion.div>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
            <div className="bg-primary-500/20 p-3 rounded-lg w-fit mb-4">
              <Code className="text-primary-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Development</h3>
            <p className="text-slate-400">Leverage the latest .NET features with Dataverse development.</p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
            <div className="bg-primary-500/20 p-3 rounded-lg w-fit mb-4">
              <Workflow className="text-primary-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Streamlined Workflows</h3>
            <p className="text-slate-400">Automate repetitive tasks and focus on building valuable solutions.</p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
            <div className="bg-primary-500/20 p-3 rounded-lg w-fit mb-4">
              <Database className="text-primary-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Azure & Dataverse</h3>
            <p className="text-slate-400">Experience a trivial development experience when working with Azure and Dataverse together.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;