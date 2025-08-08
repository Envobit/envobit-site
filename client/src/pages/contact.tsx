import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MessageSquare, Clock, CheckCircle } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  countryCode: z.string().min(1, "Please select a country code"),
  companyName: z.string().optional(),
  website: z.string().optional(),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const budgetOptions = [
  { value: "50k-100k", label: "$50k - $100k" },
  { value: "100k-250k", label: "$100k - $250k" },
  { value: "250k-500k", label: "$250k - $500k" },
  { value: "500k-1m", label: "$500k - $1M" },
  { value: "1m+", label: "$1M+" },
];

const countryCodes = [
  { value: "+1", label: "+1 (US/CA)" },
  { value: "+44", label: "+44 (UK)" },
  { value: "+49", label: "+49 (DE)" },
  { value: "+33", label: "+33 (FR)" },
  { value: "+91", label: "+91 (IN)" },
  { value: "+61", label: "+61 (AU)" },
  { value: "+81", label: "+81 (JP)" },
  { value: "+86", label: "+86 (CN)" },
  { value: "+82", label: "+82 (KR)" },
  { value: "+65", label: "+65 (SG)" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "",
      companyName: "",
      website: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contacts"), {
        ...data,
        submittedAt: new Date(),
        status: "new"
      });
      
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-large p-12"
              data-testid="success-message"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-navy mb-4 font-montserrat">
                Thank you for reaching out!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We've received your message and will get back to you within 24 hours. 
                Our team is excited to learn more about your project.
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-light-blue hover:bg-blue-600 text-white px-8 py-3"
                data-testid="button-back-home"
              >
                Back to Home
              </Button>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-navy to-navy/90">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="contact-hero"
          >
            <Badge 
              variant="outline" 
              className="inline-flex items-center px-4 py-2 bg-light-blue/20 border-light-blue/30 text-light-blue text-sm font-medium mb-6"
              data-testid="badge-response-time"
            >
              <Clock className="w-4 h-4 mr-2" />
              24-hour response guarantee
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight font-montserrat">
              Ready to start? <span className="text-light-blue">Let's chat!</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Want to reach out to us directly? We're here to turn your vision into reality. 
              Share your project details and let's build something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-supporting-gray">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-large border-0" data-testid="contact-form-card">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-navy font-montserrat">
                  Tell us about your project
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 mt-4">
                  The more details you share, the better we can help you succeed
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy font-semibold">Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                {...field}
                                data-testid="input-name"
                                className="border-gray-300 focus:border-light-blue"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy font-semibold">Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="john@company.com" 
                                {...field}
                                data-testid="input-email"
                                className="border-gray-300 focus:border-light-blue"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Phone with Country Code */}
                    <div className="grid grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy font-semibold">Country *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-country-code">
                                  <SelectValue placeholder="Code" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {countryCodes.map((country) => (
                                  <SelectItem key={country.value} value={country.value}>
                                    {country.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel className="text-navy font-semibold">Phone Number *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="(555) 123-4567" 
                                {...field}
                                data-testid="input-phone"
                                className="border-gray-300 focus:border-light-blue"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Company Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy font-semibold">Company Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Acme Corp" 
                                {...field}
                                data-testid="input-company"
                                className="border-gray-300 focus:border-light-blue"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy font-semibold">Website</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="https://acme.com" 
                                {...field}
                                data-testid="input-website"
                                className="border-gray-300 focus:border-light-blue"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Budget Selection */}
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy font-semibold">Project Budget *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-budget">
                                <SelectValue placeholder="Select your budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {budgetOptions.map((budget) => (
                                <SelectItem key={budget.value} value={budget.value}>
                                  {budget.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy font-semibold">Project Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                              className="min-h-[120px] border-gray-300 focus:border-light-blue resize-none"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-light-blue hover:bg-blue-600 text-white py-4 text-lg font-semibold transition-all duration-200 hover:shadow-lg"
                      data-testid="button-submit-contact"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hover-lift"
              data-testid="contact-info-email"
            >
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Email Us</h3>
              <p className="text-gray-600">hello@envobit.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="hover-lift"
              data-testid="contact-info-phone"
            >
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="hover-lift"
              data-testid="contact-info-chat"
            >
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Live Chat</h3>
              <p className="text-gray-600">Available 9 AM - 6 PM EST</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}