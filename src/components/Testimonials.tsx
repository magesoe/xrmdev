import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "XrmBedrock has transformed how our team develops for Dataverse. We've cut development time by 35% and significantly improved code quality.",
    author: "Sarah Johnson",
    title: "Lead Developer, Financial Services"
  },
  {
    quote: "The TypeScript integration alone is worth switching to XrmBedrock. Catching errors at compile time instead of runtime has been a game-changer for our team.",
    author: "Michael Chen",
    title: "CTO, Healthcare Solutions"
  },
  {
    quote: "Our CI/CD pipeline with XrmBedrock has reduced deployment issues by 80%. We can now deploy with confidence multiple times per day.",
    author: "Emma Rodriguez",
    title: "DevOps Engineer, Manufacturing"
  }
];

const TestimonialCard: React.FC<{
  quote: string;
  author: string;
  title: string;
  index: number;
}> = ({ quote, author, title, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-slate-800 p-6 rounded-xl relative"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute -top-3 -left-3 bg-primary-600 rounded-full p-2">
        <Quote size={20} className="text-white" />
      </div>
      <p className="text-slate-300 mb-6 italic">{quote}</p>
      <div>
        <p className="font-semibold text-white">{author}</p>
        <p className="text-slate-400 text-sm">{title}</p>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 bg-slate-900/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Developers Are <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-xl text-slate-300">
            Hear from professional developers who have transformed their Dataverse development with XrmBedrock.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;