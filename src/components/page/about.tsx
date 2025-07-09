import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      <Card
        className="max-w-3xl w-full p-8 shadow-2xl rounded-2xl border border-gray-200 bg-white"
        data-aos="fade-up"
      >
        <CardContent className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to our application! We are passionate about building modern, scalable, and user-focused digital experiences. Our team is committed to delivering clean design, efficient development practices, and innovative features tailored for today’s web.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            This project showcases the use of modern React tools, including ShadCN UI, AOS animations, and third-party services like Formspree and Sonner for smooth interactions. We prioritize performance, accessibility, and ease of use.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're a client, a collaborator, or just a curious visitor — thank you for stopping by!
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
