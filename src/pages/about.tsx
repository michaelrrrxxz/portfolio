

import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
      <Card className="max-w-2xl w-full p-6 shadow-xl rounded-2xl">
        <CardContent className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="text-gray-700 text-lg">
            Welcome to the about page of our application.
          </p>
          <p className="text-gray-700 text-lg">
            Here you can find more information about us and what we do.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
