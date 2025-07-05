import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="flex justify-center items-center py-20 px-4 bg-white">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-0">
        {/* Left Column - Contact Info */}
        <Card className="rounded-r-none border-r-0 rounded-lg">
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
                <span className="text-sm">+63 sample</span>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">City of Santiago, Philippines</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Right Column - Contact Form */}
        <Card className="rounded-l-none border-l-0 rounded-lg">
          <CardContent className="p-10 flex items-center justify-center h-full">
            <form className="w-full space-y-5">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl">Send a message</CardTitle>
              </CardHeader>
              <div>
                <label className="block text-xs font-medium mb-2 uppercase tracking-wider">Full Name</label>
                <Input 
                  type="text" 
                  placeholder="Your name" 
                  className="rounded-sm border-black focus-visible:ring-black" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 uppercase tracking-wider">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-sm border-black focus-visible:ring-black" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 uppercase tracking-wider">Topic</label>
                <Input 
                  type="text" 
                  placeholder="Subject" 
                  className="rounded-sm border-black focus-visible:ring-black" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 uppercase tracking-wider">Message</label>
                <Textarea 
                  placeholder="Your message" 
                  rows={4} 
                  className="rounded-sm border-black focus-visible:ring-black" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full rounded-sm uppercase text-xs tracking-wider font-medium"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}