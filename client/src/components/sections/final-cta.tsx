import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Gift, Hourglass, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="final-cta" className="py-20 bg-navy text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="final-cta-content"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-8 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="text-final-cta-headline"
          >
            Ready to join the companies<br />
            that chose <span className="text-light-blue">both</span>?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            data-testid="text-final-cta-description"
          >
            We're selective about our partnerships. We only work with 
            companies that share our vision for integrated excellence. 
            The question isn't whether we can transform your product. 
            The question is whether you're ready for transformation.
          </motion.p>
          
          {/* Scarcity Signal */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge 
              variant="outline"
              className="bg-red-500/20 border-red-400/30 rounded-xl p-6 inline-block"
              data-testid="badge-final-scarcity"
            >
              <div className="flex items-center justify-center">
                <Hourglass className="text-red-300 text-xl mr-3" />
                <span className="text-lg font-semibold text-red-300">
                  8 partnership slots remaining for 2025
                </span>
              </div>
            </Badge>
          </motion.div>
          
          {/* Primary CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={buttonVariants}>
              <Button 
                size="lg"
                className="bg-light-blue hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl"
                data-testid="button-apply-partnership"
              >
                <UserCheck className="w-5 h-5 mr-2" />
                Apply for Partnership
              </Button>
            </motion.div>
            
            <motion.div variants={buttonVariants}>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-light-blue text-light-blue hover:bg-light-blue hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-200"
                data-testid="button-free-audit"
              >
                <Gift className="w-5 h-5 mr-2" />
                Get Free Product Strategy Audit
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Secondary CTA */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              variant="link"
              className="text-gray-400 hover:text-light-blue transition-colors text-lg"
              data-testid="button-see-if-qualify"
            >
              See If You Qualify
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
