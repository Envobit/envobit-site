import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { isValidPhoneNumber } from "react-phone-number-input";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelTextarea } from "@/components/ui/floating-label-textarea";
import { FloatingLabelPhoneInput } from "@/components/ui/floating-label-phone-input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Label } from "@/components/ui/label";
import { BUDGET_OPTIONS, SERVICES } from "@/config/contact";
import { useLocation } from "wouter";
import { submitToGoogleForms } from "@/lib/google-forms";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().refine(isValidPhoneNumber, {
    message: "Please enter a valid phone number",
  }),
  companyName: z.string().optional(),
  website: z.string().optional(),
  budget: z.string().min(1, "Please select a budget range"),
  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      website: "",
      budget: "",
      services: [],
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await addDoc(collection(db, "contacts"), {
        ...data,
        submittedAt: serverTimestamp(),
      });

      // fire-and-forget submit to google forms wr
      void submitToGoogleForms({
        name: data.name,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName,
        website: data.website,
        budget: data.budget,
        services: data.services,
        message: data.message,
      });

      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
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
              <h1 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                Thank you for reaching out!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We've received your message and will be in touch soon.
              </p>
              <Button
                onClick={() => setLocation("/")}
                className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-3"
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

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-12"
          >
            <h1 className="text-5xl lg:text-6xl font-medium text-gray-900 mb-6 font-montserrat tracking-tight">
              <span className="text-gray-300">Ready to</span>
              <br />
              <span className="text-light-blue">start</span> your project?
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput aria-label="Name *" {...field} />
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
                      <FormControl>
                        <FloatingLabelInput
                          type="email"
                          aria-label="Email *"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelPhoneInput
                          international
                          defaultCountry="US"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          aria-label="Company Name"
                          {...field}
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
                      <FormControl>
                        <FloatingLabelInput aria-label="Website" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="data-[placeholder]:text-gray-500">
                            <SelectValue placeholder="Select a Budget *" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {BUDGET_OPTIONS.map((budget) => (
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

                <FormField
                  control={form.control}
                  name="services"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <Label className="text-gray-500 font-normal">
                        How can we help you? *
                      </Label>
                      <FormControl>
                        <ToggleGroup
                          type="multiple"
                          variant="outline"
                          className="flex-wrap justify-start gap-2 pt-2"
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          {SERVICES.map((service) => (
                            <motion.div
                              key={service.value}
                              whileTap={{ scale: 0.8 }}
                            >
                              <ToggleGroupItem
                                value={service.value}
                                className="rounded-full data-[state=on]:bg-gray-900 data-[state=on]:text-white transition-colors duration-200"
                              >
                                {service.label}
                              </ToggleGroupItem>
                            </motion.div>
                          ))}
                        </ToggleGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormControl>
                        <FloatingLabelTextarea
                          aria-label="Message *"
                          className="min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    variant="outline"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="rounded-full px-12 py-6 text-base font-normal border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
