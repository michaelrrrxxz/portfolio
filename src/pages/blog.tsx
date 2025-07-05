"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Construction } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 bg-white">
      <Card
        className="w-full max-w-md rounded-2xl shadow-xl border border-dashed border-primary bg-white"
        data-aos="zoom-in"
      >
        <CardHeader className="flex items-center justify-center text-center">
          <Construction className="h-10 w-10 text-yellow-500" />
          <CardTitle className="mt-4 text-2xl font-bold">
            Blog Coming Soon
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            We're currently working on our blog content. Stay tuned for articles, tips, and updates.
          </p>
          <Button disabled variant="outline">
            🚧 Under Construction
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
