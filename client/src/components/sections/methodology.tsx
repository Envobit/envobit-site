import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, ServerCog, Rocket, Download } from "lucide-react";

const phases = [
  {
    id: 'intelligence',
    icon: Search,
    title: "Intelligence Phase",
    description: "Customer psychology research drives every technical decision"
  },
  {
    id: 'integration',
    icon: ServerCog,
    title: "Integration Phase",
    description: "Development and growth systems built simultaneously"
  },
  {
    id: 'ignition',
    icon: Rocket,
    title: "Ignition Phase",
    description: "Launch with proven systems that scale to 1000+ customers"
  }
];

export default function Methodology() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="methodology" className="py-20 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up" data-testid="methodology-header">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="text-methodology-headline"
          >
            The <span className="text-light-blue">Envobit Integration Protocol™</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            data-testid="text-methodology-description"
          >
            Our proprietary methodology combines development, neuroscience, 
            and growth marketing from day one. No handoffs. No misalignment. 
            No products that work perfectly but nobody wants.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          data-testid="methodology-phases"
        >
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <motion.div
                key={phase.id}
                variants={cardVariants}
                className="text-center group"
                data-testid={`card-phase-${phase.id}`}
              >
                <motion.div 
                  className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-navy transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="text-2xl" />
                </motion.div>
                <h3 
                  className="text-2xl font-bold mb-4"
                  data-testid={`text-phase-title-${phase.id}`}
                >
                  {phase.title}
                </h3>
                <p 
                  className="text-gray-300 leading-relaxed"
                  data-testid={`text-phase-description-${phase.id}`}
                >
                  {phase.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            className="bg-light-blue hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:shadow-xl hover:scale-105"
            data-testid="button-download-methodology"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Our Complete Methodology
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
