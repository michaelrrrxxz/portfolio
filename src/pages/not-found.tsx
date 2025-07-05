"use client";

import { Button } from "@/components/ui/button";
import { MapPinOff } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <MapPinOff className="h-10 w-10 text-destructive" />
        <h1 className="text-2xl font-semibold">Oops! That page could not be found.</h1>
        <p className="text-sm text-muted-foreground max-w-md">
          The page you're trying to reach doesn't exist or has been moved.
        </p>
        <Button
          variant="default"
          onClick={() => window.location.href = "/"}
          className="mt-4"
        >
          Go back home
        </Button>
      </div>
    </div>
  );
}
