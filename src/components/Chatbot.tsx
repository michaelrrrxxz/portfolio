"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; from: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");

  const getBotReply = (msg: string) => {
    const lower = msg.toLowerCase();

    if (lower.includes("hello")) return "Hello! I'm Michael Angelo, an aspiring IT professional. How can I assist you today?";
    if (lower.includes("help")) return "Sure, I'm here to help. Are you asking about Laravel, Vue.js, or anything tech-related?";
    if (lower.includes("skills")) return "I’m skilled in Laravel, Vue.js, Git, and more. Want to know about a specific skill?";
    if (lower.includes("experience")) return "I completed my OJT at Aljay Agro-Industrial Solutions, Inc. Need more details?";
    if (lower.includes("education")) return "I'm pursuing a BS in Information Technology at Northeastern College. Want to know more?";
    if (lower.includes("contact")) return "You can reach me at mmangaoang21@yahoo.com or visit michaelangelo-dev.site";

    return "Sorry, I don't understand. Try asking about my skills, experience, education, or contact info!";
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { text: input, from: "user" as const };
    setMessages((msgs) => [...msgs, userMsg]);
    const botReply = getBotReply(input);
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { text: botReply, from: "bot" }]);
    }, 500);
    setInput("");
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 text-xl"
      >
        💬
      </Button>

      {open && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 flex flex-col max-h-[450px]">
          <CardHeader className="flex flex-row justify-between items-center py-3">
            <CardTitle className="text-base">Chatbot</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-xl">
              ×
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto space-y-2 px-3 py-2" style={{ maxHeight: "280px" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-xl px-3 py-2 text-sm max-w-[80%] ${
                    msg.from === "user" ? "bg-gray-200" : "bg-blue-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </CardContent>

          <div className="border-t px-3 py-2 flex items-center gap-2">
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage}>Send</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
