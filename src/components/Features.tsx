import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  GitBranch, 
  Workflow, 
  Cloud, 
  Layers, 
  Zap,
  FileCode,
  RefreshCw,
  Terminal
} from 'lucide-react';

const features = [
  {
    icon: <Code2 size={24} />,
    title: 'Compile-Time Azure Integration',
    description: 'Tight compile-time coupling between Azure and Dataverse while maintaining low runtime coupling, ensuring type safety and early error detection.'
  },
  {
    icon: <Workflow size={24} />,
    title: 'Modern .NET Development',
    description: 'Experience latest .NET Core development patterns while writing .NET Framework plugins through advanced IoC implementation.'
  },
  {
    icon: <Terminal size={24} />,
    title: 'Local Testing & Debugging',
    description: 'Test and debug both Dataverse and Azure logic locally, including cross-service communication and integration points.'
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Automatic Registration',
    description: 'Fully automated registration of plugins, custom APIs, and web resources without manual intervention.'
  },
  {
    icon: <Cloud size={24} />,
    title: 'Automated Deployment',
    description: 'Seamless deployment of Azure infrastructure and Dataverse solutions with automated pipelines and checks.'
  },
  {
    icon: <Layers size={24} />,
    title: 'Advanced Development',
    description: 'Develop plugins, custom apis and webresources with modern patterns, enriched types, and robust testing.'
  },
];

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="feature-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-primary-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Features for <span className="gradient-text">Enterprise Development</span>
          </h2>
          <p className="text-xl text-slate-300">
            XrmBedrock bridges the gap between Azure and Dataverse development with powerful automation and modern development patterns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;