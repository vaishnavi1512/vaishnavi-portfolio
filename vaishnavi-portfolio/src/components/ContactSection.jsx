import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {toast} = useToast();
    const handleSubmit = (e) => {
        e.preventDefault();
    
        setIsSubmitting(true);
    
        setTimeout(() => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
        }, 1500);
      };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Open to new roles, freelance projects, or collaboration. Let’s
          connect!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* contact information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              {/* sec-1 */}
              <div className="flex tems-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6 w-6"></Mail>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:vaishnavisiripalli@gmail.com"
                  >
                    vaishnavisiripalli@gmail.com
                  </a>
                </div>
              </div>

              {/* sec-2 */}

              <div className="flex tems-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary h-6 w-6"></Phone>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="tel:+918168553239"
                  >
                    +918168553239
                  </a>
                </div>
              </div>

              {/* sec-3 */}

              <div className="flex tems-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="text-primary h-6 w-6"></MapPin>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Hyderabad, Telangana
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* social-media */}
          <div className="pt-8">
            <h4 className="font-medium mb-4"> Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="#" target="_blank">
                <Linkedin />
              </a>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="Enter your name..."
                  ></input>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="Enter your email..."
                  ></input>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Enter Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
