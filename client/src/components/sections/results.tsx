import { motion } from "framer-motion";

const clientResults = [
  {
    id: 'saas-growth',
    metric: "0 to 10K",
    description: "Users in 90 days",
    category: "SaaS Platform"
  },
  {
    id: 'conversion-improvement',
    metric: "300%",
    description: "Conversion improvement",
    category: "E-commerce App"
  },
  {
    id: 'enterprise-deployment',
    metric: "50K+",
    description: "Employees deployed",
    category: "Enterprise Tool"
  },
  {
    id: 'mobile-success',
    metric: "4.9★",
    description: "100K+ downloads",
    category: "Mobile App"
  }
];

const authorityMetrics = [
  {
    id: 'production-code',
    metric: "500K+",
    description: "Lines of production code"
  },
  {
    id: 'successful-launches',
    metric: "50+",
    description: "Successful product launches"
  },
  {
    id: 'client-retention',
    metric: "95%",
    description: "Client retention rate"
  },
  {
    id: 'value-generated',
    metric: "$100M+",
    description: "Client value generated"
  }
];

export default function Results() {
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

  const countUpVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up" data-testid="results-header">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-navy mb-6 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="text-results-headline"
          >
            Results that speak louder<br />
            than <span className="text-light-blue">promises</span>
          </motion.h2>
        </div>
        
        {/* Client Success Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          data-testid="client-results-grid"
        >
          {clientResults.map((result) => (
            <motion.div
              key={result.id}
              variants={cardVariants}
              className="bg-supporting-gray rounded-xl p-8 text-center hover-lift transition-all duration-300"
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
              data-testid={`card-result-${result.id}`}
            >
              <motion.div 
                variants={countUpVariants}
                className="text-3xl font-bold text-light-blue mb-2 font-montserrat"
                data-testid={`text-result-metric-${result.id}`}
              >
                {result.metric}
              </motion.div>
              <div 
                className="text-navy font-semibold mb-2"
                data-testid={`text-result-description-${result.id}`}
              >
                {result.description}
              </div>
              <div 
                className="text-sm text-gray-600"
                data-testid={`text-result-category-${result.id}`}
              >
                {result.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Authority Metrics */}
        <motion.div 
          className="bg-navy rounded-2xl p-12 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="authority-metrics-section"
        >
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {authorityMetrics.map((metric) => (
              <motion.div
                key={metric.id}
                variants={cardVariants}
                data-testid={`card-authority-metric-${metric.id}`}
              >
                <motion.div 
                  variants={countUpVariants}
                  className="text-4xl font-bold text-light-blue mb-2 font-montserrat"
                  data-testid={`text-authority-metric-${metric.id}`}
                >
                  {metric.metric}
                </motion.div>
                <div 
                  className="text-gray-300"
                  data-testid={`text-authority-description-${metric.id}`}
                >
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
