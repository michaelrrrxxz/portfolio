"use client";


import { Github, Facebook } from "lucide-react";

/* ─────────────────────────────────────────
   Links
   ───────────────────────────────────────── */

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
  return (
    <footer className="mt-24 border-t bg-muted/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}MichaelAngelo.Dev. All rights reserved.
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
