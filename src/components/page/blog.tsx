"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";

export default function BlogPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="flex flex-col items-center px-4 py-16 bg-white min-h-screen">
      {/* Section Heading */}
      <div
        className="mb-12 text-center max-w-2xl"
        data-aos="fade-up"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">
          Recent Blog Project
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">
          Laravel CRUD Generator
        </h1>
        <p className="text-gray-600 text-base">
          A handy tool that scaffolds Laravel CRUD logic with just a few inputs — no repetitive boilerplate.
        </p>
      </div>

      {/* Project Card */}
      <Card
        className="w-full max-w-2xl rounded-2xl shadow-xl border bg-white"
        data-aos="zoom-in"
      >
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">
            Laravel CRUD Generator
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-center">
          {/* Image */}
          <img
            src="/images/laravel-crud-generator.png"
            alt="Laravel CRUD Generator"
            className="w-full rounded-xl border"
          />

          {/* Description */}
          <p className="text-muted-foreground text-base">
            This tool simplifies Laravel development by auto-generating models, migrations,
            controllers, and routes — speeding up backend workflows.
          </p>

          {/* Visit Button */}
          <a
            href="https://laravelcrudgenerator.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" className="flex gap-2 items-center">
              Visit Project
              <ExternalLinkIcon className="w-4 h-4" />
            </Button>
          </a>
        </CardContent>
      </Card>
    </main>
  );
}
