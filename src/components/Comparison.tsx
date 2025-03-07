import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';

const ComparisonItem: React.FC<{
  feature: string;
  xrmBedrock: boolean;
  standard: boolean;
  index: number;
}> = ({ feature, xrmBedrock, standard, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.tr
      ref={ref}
      className={index % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-900'}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <td className="px-6 py-4 text-sm font-medium text-white">{feature}</td>
      <td className="px-6 py-4 text-center">
        {xrmBedrock ? (
          <Check className="mx-auto text-green-500" size={20} />
        ) : (
          <X className="mx-auto text-red-500" size={20} />
        )}
      </td>
      <td className="px-6 py-4 text-center">
        {standard ? (
          <Check className="mx-auto text-green-500" size={20} />
        ) : (
          <X className="mx-auto text-red-500" size={20} />
        )}
      </td>
    </motion.tr>
  );
};

const Comparison: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const comparisonData = [
    { feature: 'Modern Development', xrmBedrock: true, standard: false },
    { feature: 'Local Testing & Debugging', xrmBedrock: true, standard: false },
    { feature: 'Automatic Registration', xrmBedrock: true, standard: false },
    { feature: 'Advanced Early-bound proxy classes', xrmBedrock: true, standard: false },
    { feature: 'Tailored Typescript Development', xrmBedrock: true, standard: false },
    { feature: 'Advanced Plugin Development', xrmBedrock: true, standard: false },
    { feature: 'Automated Deployment', xrmBedrock: true, standard: true },
    { feature: 'Infrastructure as Code', xrmBedrock: true, standard: true },
  ];

  return (
    <section id="comparison" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">XrmBedrock</span> vs Standard Tooling
          </h2>
          <p className="text-xl text-slate-300">
            See how XrmBedrock compares to Microsoft's standard Dataverse development experience.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-slate-800">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Feature
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-white">
                  XrmBedrock
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-white">
                  Standard Microsoft
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {comparisonData.map((item, index) => (
                <ComparisonItem
                  key={index}
                  feature={item.feature}
                  xrmBedrock={item.xrmBedrock}
                  standard={item.standard}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;