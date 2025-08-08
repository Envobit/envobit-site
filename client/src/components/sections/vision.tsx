import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Vision() {
  return (
    <section id="vision" className="py-20 bg-supporting-gray">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="vision-content"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-navy mb-8 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="text-vision-headline"
          >
            We're building the <span className="text-light-blue">future</span> of<br />
            product development
          </motion.h2>
          
          <div className="text-xl text-gray-600 leading-relaxed space-y-6 mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              data-testid="text-vision-paragraph-1"
            >
              Imagine a world where every great idea gets both brilliant execution 
              and beautiful growth. Where technical excellence and market success aren't 
              separate battles. Where the best products win because they're built right 
              AND launched right.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="text-vision-paragraph-2"
            >
              That's the future we're creating. One integrated team at a time.
            </motion.p>
            
            <motion.p 
              className="font-semibold text-navy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              data-testid="text-vision-paragraph-3"
            >
              When you work with Envobit, you're not just hiring developers. 
              You're joining a movement that's redefining how breakthrough products 
              are brought to life.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg"
              className="bg-navy hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:shadow-xl hover:scale-105"
              data-testid="button-join-movement"
            >
              Join the Movement
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
