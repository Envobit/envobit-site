import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center fade-in-up" data-testid="problem-content">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-navy mb-8 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="text-problem-headline"
          >
            The <span className="text-light-blue">$2M talent problem</span><br />
            every ambitious founder faces
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              data-testid="text-problem-description"
            >
              You know your product could change everything. But assembling 
              a world-class team of senior developers, UX researchers, and growth experts 
              would cost $2M+ annually. Most founders compromise. Choose building OR scaling. 
              Watch brilliant products die in obscurity.
            </motion.p>
            
            <motion.p 
              className="text-xl text-navy font-semibold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="text-problem-empathy"
            >
              We've seen this story too many times. It's why we exist.
            </motion.p>
            
            <motion.div 
              className="bg-red-50 border border-red-200 rounded-xl p-8 inline-block hover-lift"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              data-testid="card-social-proof"
            >
              <div className="flex items-center justify-center">
                <AlertTriangle className="text-red-500 text-2xl mr-4" />
                <span className="text-xl font-semibold text-red-700">
                  73% of product launches fail due to poor go-to-market strategy
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
