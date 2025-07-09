"use client";

import { Github, Facebook, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const SOCIAL = [
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/michaelrrrxxz",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/michaelmanagaoangfb",
  },
];

export default function Footer() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 border-t bg-muted/40 relative">
      {showArrow && (
        <Button
          onClick={scrollToTop}
          variant="default"
          size="icon"
          className="fixed bottom-8 left-6 z-50 rounded-full bg-black text-white hover:bg-muted transition"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MichaelAngelo.Dev. All rights reserved.
        </p>

        <div className="flex gap-6">
          {SOCIAL.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80 focus:opacity-80"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
