import React from 'react';
import { Github, Twitter, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="mr-2 text-primary-500">
                {/* Rock cleaved by lava icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8l2.1-.6c.5-.1 1-.6 1.4-1.1l3.6-4.3a1 1 0 0 1 1.5 0l3.3 4.3c.4.5.9 1 1.4 1.1L19 8" />
                  <path d="M6.8 12l-2.9 8.2a.9.9 0 0 0 1.2 1.1L12 18l6.9 3.3a.9.9 0 0 0 1.2-1.1L17.2 12" />
                  <path d="M12 2v16" strokeDasharray="2 2" />
                  <path d="M5 8h14" />
                  <path d="M5 12h14" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">
                <span className="gradient-text">XrmBedrock</span>
              </h2>
            </div>
            <p className="text-slate-400 mb-4">
              Modern development tools for professional Dataverse developers. Build better solutions faster with XrmBedrock.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/delegateas/XrmBedrock" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/xrmwizard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:magesoe@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/delegateas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Other tools
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/delegateas/XrmBedrock/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Issues
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.linkedin.com/in/xrmwizard/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Magnus Gether Sørensen
                </a>
              </li>
              <li>
                <a 
                  href="mailto:magesoe@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  magesoe@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/xrmwizard/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/delegateas/XrmBedrock" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Magnus Gether Sørensen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;