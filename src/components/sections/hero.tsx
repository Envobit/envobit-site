import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Calendar, Play } from "lucide-react";
import { useLocation } from "wouter";

export default function Hero() {
  const [, setLocation] = useLocation();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-navy/70"></div>
      <div className="absolute inset-0 opacity-20">
        <div
          style={{
            backgroundImage: "url('/images/hero-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white pt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          data-testid="hero-content"
        >
          {/* Authority Signal */}
          <motion.div variants={textVariants} custom={0} className="mb-6">
            <Badge
              variant="outline"
              className="inline-flex items-center px-4 py-2 bg-light-blue/20 border-light-blue/30 text-light-blue text-sm font-medium"
              data-testid="badge-authority"
            >
              <Star className="w-4 h-4 mr-2" />
              Trusted by companies scaling to millions of users
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={textVariants}
            custom={1}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight font-montserrat"
            data-testid="text-hero-headline"
          >
            Software that works
            <br className="hidden sm:block" />
            <span className="text-light-blue"> brilliantly</span> and scales
            <br className="hidden sm:block" />
            <span className="text-light-blue"> beautifully</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={textVariants}
            custom={2}
            className="text-lg lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            The complete product team that Fortune 500s build internally - now
            accessible to ambitious companies. Elite developers + neuroscience
            researchers + growth experts working as one integrated force.
          </motion.p>

          {/* Scarcity Signal */}
          <motion.div variants={textVariants} custom={3} className="mb-8">
            <Badge
              variant="outline"
              className="inline-flex items-center px-4 py-2 bg-red-500/20 border-red-400/30 text-red-300 text-sm font-medium"
              data-testid="badge-scarcity"
            >
              <Clock className="w-4 h-4 mr-2" />
              Currently accepting 8 new projects for Q4 2025
            </Badge>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-light-blue hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl"
              onClick={() => setLocation("/contact")}
              data-testid="button-claim-strategy-session"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Claim Your Strategy Session
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
