import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Github, Server, Heart } from "lucide-react";

const teamMembers = [
  {
    id: 'arsalan',
    name: "Arsalan Zaffar",
    role: "Growth Architect",
    description: "Built neuromarketing systems that generated $50M+ in client revenue. Former strategy consultant who cracked the psychology of viral growth.",
    metric: "15+ years in neuromarketing",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 'sharjeel',
    name: "Sharjeel Yunus",
    role: "Technical Visionary",
    description: "10,000+ hours building scalable React systems. Open-source contributor with 15K+ GitHub stars. Architect of solutions that handle millions of users.",
    metric: "15K+ GitHub stars",
    icon: Github,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 'farhan',
    name: "Farhan Ashraf",
    role: "Infrastructure Maestro",
    description: "DevOps specialist who's deployed systems for 100M+ user applications. Kubernetes expert who makes complex infrastructure invisible.",
    metric: "99.99% uptime track record",
    icon: Server,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 'anser',
    name: "Anser Waseem",
    role: "Experience Craftsman",
    description: "Product designer who's shipped 50+ applications with 95%+ user satisfaction. Master of converting user research into pixel-perfect experiences.",
    metric: "95%+ user satisfaction",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

export default function Team() {
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
    <section id="team" className="py-20 bg-supporting-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up" data-testid="team-header">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-navy mb-6 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="text-team-headline"
          >
            Meet the team most companies<br />
            <span className="text-light-blue">can't afford to build</span>
          </motion.h2>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          data-testid="team-grid"
        >
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="bg-white rounded-xl p-8 hover-lift transition-all duration-300"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                data-testid={`card-team-${member.id}`}
              >
                <img 
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                  data-testid={`img-team-${member.id}`}
                />
                <h3 
                  className="text-xl font-bold text-navy mb-2 text-center"
                  data-testid={`text-team-name-${member.id}`}
                >
                  {member.name}
                </h3>
                <h4 
                  className="text-light-blue font-semibold mb-4 text-center"
                  data-testid={`text-team-role-${member.id}`}
                >
                  {member.role}
                </h4>
                <p 
                  className="text-gray-600 text-sm mb-4 leading-relaxed text-center"
                  data-testid={`text-team-description-${member.id}`}
                >
                  {member.description}
                </p>
                <div 
                  className="flex items-center justify-center text-sm text-gray-500"
                  data-testid={`text-team-metric-${member.id}`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {member.metric}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="link"
            className="text-light-blue font-semibold hover:underline text-lg"
            data-testid="button-see-team-credentials"
          >
            See Full Team Credentials →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
