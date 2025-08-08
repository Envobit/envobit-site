import { motion } from "framer-motion";
import { Code, Smartphone, Building, Bot, Brain, Rocket } from "lucide-react";

const services = [
  {
    id: 'web-development',
    icon: Code,
    title: "Web Development",
    description: "React, Next.js solutions that load in under 1 second and scale to millions of users.",
    technologies: "React • Next.js • TypeScript"
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform Flutter applications that feel native everywhere.",
    technologies: "Flutter • iOS • Android"
  },
  {
    id: 'enterprise-solutions',
    icon: Building,
    title: "Enterprise Solutions",
    description: "Scalable business software deployed to 50,000+ employees.",
    technologies: "Microservices • Cloud • Security"
  },
  {
    id: 'ai-automation',
    icon: Bot,
    title: "AI & Automation",
    description: "Custom AI solutions and workflows that learn and optimize automatically.",
    technologies: "Machine Learning • AI • Automation"
  },
  {
    id: 'customer-experience',
    icon: Brain,
    title: "Customer Experience Optimization",
    description: "Neuroscience-based UX/UI that converts browsers into believers.",
    technologies: "Neuroscience • UX Research • Psychology"
  },
  {
    id: 'launch-growth',
    icon: Rocket,
    title: "Launch & Growth Strategy",
    description: "From launch to first 1000 customers with proven growth methodologies.",
    technologies: "Growth Marketing • Strategy • Launch"
  }
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up" data-testid="services-header">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-navy mb-6 font-montserrat leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="text-services-headline"
          >
            The only team that combines<br />
            <span className="gradient-text">world-class development</span> with<br />
            <span className="gradient-text">customer neuroscience</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            data-testid="text-services-subtitle"
          >
            One integrated team delivering complete product solutions - from brilliant code to beautiful scale
          </motion.p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          data-testid="services-grid"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-supporting-gray rounded-xl p-8 hover-lift transition-all duration-300 group"
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                data-testid={`card-service-${service.id}`}
              >
                <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-300">
                  <IconComponent className="text-white text-xl" />
                </div>
                <h3 
                  className="text-xl font-bold text-navy mb-4"
                  data-testid={`text-service-title-${service.id}`}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-gray-600 mb-4 leading-relaxed"
                  data-testid={`text-service-description-${service.id}`}
                >
                  {service.description}
                </p>
                <div 
                  className="text-sm text-light-blue font-semibold"
                  data-testid={`text-service-technologies-${service.id}`}
                >
                  {service.technologies}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
