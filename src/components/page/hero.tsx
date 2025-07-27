"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Github,
  Facebook,
  Linkedin,
  MessageCircleMore,
  Globe,
} from "lucide-react";

import Photo from "@/assets/image.png";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";

// Quote type
type Quote = {
  content: string;
  author: string;
};

export default function Hero() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchQuote = async () => {
      try {
        const res = await fetch("https://zenquotes.io/api/today");
        const data = await res.json();
  
        setQuote({ content: data[0].q, author: data[0].a });
      } catch (error) {
        console.error("Failed to fetch quote:", error);
        setQuote({
          content: "Inspiration is everywhere. Find yours.",
          author: "Unknown",
        });
      }
    };

    fetchQuote();
  }, []);

  const ACCOUNTS = [
    {
      name: "Github",
      href: "https://github.com/michaelrrrxxz",
      icon: Github,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/michaelmangaoangfb",
      icon: Facebook,
    },
    {
      name: "Messenger",
      href: "https://m.me/michaelmangaoangfb?hash=AbbTeEAx59sgJXlR&source=qr_link_share",
      icon: MessageCircleMore,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/michael-angelo-mangaoang",
      icon: Linkedin,
    },
    {
      name: "Portfolio",
      href: "https://www.michaelangelo-dev.site",
      icon: Globe,
    },
  ];

  return (
    <section className="min-h-[80vh] mt-10 px-6 py-10 lg:py-16 flex items-center bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div data-aos="fade-right">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Welcome to my Web Development Portfolio!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            I'm Michael Angelo Mangaoang, a passionate web developer based in the Philippines.
            <br />
            This is where I share my journey in web development, combining creativity and function.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {ACCOUNTS.map((account) => (
              <a
                key={account.name}
                href={account.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="flex items-center gap-2 text-sm">
                  <account.icon className="h-4 w-4" />
                  {account.name}
                </Button>
              </a>
            ))}
          </div>

          {/* Terms & Conditions Drawer */}
          <Drawer>
            <DrawerTrigger asChild>
              <button className="text-xs text-gray-500 underline hover:text-gray-700">
                Read my Terms and Conditions
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Terms and Conditions</DrawerTitle>
                <DrawerDescription className="text-sm text-gray-600 mt-2">
                  <p className="mb-2">
                    By using this portfolio website, you agree to respect the content and not copy or redistribute materials without permission.
                  </p>
                  <p className="mb-2">
                    All code samples are for demonstration purposes only. Your use of any content is at your own risk.
                  </p>
                  {quote && (
                    <p className="mb-2 italic text-gray-500">
                      "{quote.content}" — <span className="font-medium">{quote.author}</span>
                    </p>
                  )}
                  <p>
                    For inquiries, please contact me through the provided social links.
                  </p>
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Right Side Image + Quote */}
        <div className="flex flex-col items-center text-center" data-aos="fade-left">
          <img
            src={Photo}
            alt="Profile"
            className="rounded-xl object-cover w-[400px] h-[400px] border border-black bg-white shadow-md mb-4"
          />
          {quote && (
            <div className="max-w-xs text-sm text-gray-600 italic">
              “{quote.content}”
              <div className="mt-1 font-medium text-gray-500">— {quote.author}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
