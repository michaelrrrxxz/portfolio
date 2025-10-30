"use client";

import { useEffect, useState, useRef} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

import { toast } from "sonner";

export default function ContactSection() {
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
 const [captchaToken, setCaptchaToken] = useState<string | null>(null);
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCHA;
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!captchaToken) {
      toast.error("Please complete the CAPTCHA.");
      setIsSubmitting(false);
      return;
    }

    formData.append("g-recaptcha-response", captchaToken); // Add CAPTCHA token

    try {
      const response = await fetch("https://formspree.io/f/mblyedkw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        recaptchaRef.current?.reset(); // Reset CAPTCHA
        setCaptchaToken(null);
        toast.success("Message sent! I’ll get back to you shortly.");
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-20 px-4 bg-white">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-x-8 relative">
        {/* Left Column */}
        <Card className="rounded-r-none border-r-0 rounded-lg" data-aos="fade-right">
          <CardContent className="p-10 flex flex-col justify-center h-full">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-3xl font-medium tracking-tight">CONTACT</CardTitle>
            </CardHeader>
            <p className="text-sm mb-8 max-w-md leading-relaxed">
              Have a question, opportunity, or just want to say hello? Drop a message and let's get the conversation started.
            </p>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">mmangaoang21@yahoo.com</span>
              </li>
              <li className="flex items-start space-x-4">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+63 9930392836</span>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">City of Santiago, Philippines</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Right Column */}
        <Card className="rounded-l-none  rounded-lg" data-aos="fade-left">
          <CardContent className="p-10 flex items-center justify-center h-full">
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl">Send a message</CardTitle>
              </CardHeader>

              {/* Honeypot anti-spam field */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <div>
                <label className="block text-xs font-medium mb-2 uppercase tracking-wider">Full Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="rounded-sm border-black focus-visible:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-2 uppercase tracking-wider">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="rounded-sm border-black focus-visible:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-2 uppercase tracking-wider">Topic</label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="rounded-sm border-black focus-visible:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-2 uppercase tracking-wider">Message</label>
                <Textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  required
                  className="rounded-sm border-black focus-visible:ring-black"
                />
              </div>
              <ReCAPTCHA
        ref={recaptchaRef}
      sitekey={RECAPTCHA_SITE_KEY}
        onChange={(token) => setCaptchaToken(token)}
      />

              <Button
                type="submit"
                className="w-full rounded-sm uppercase text-xs tracking-wider font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
