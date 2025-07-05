"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { botResponses } from "@/constants/bot";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; from: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");

  const bottomRef = useRef<HTMLDivElement>(null); // Ref for scrolling

  const getBotReply = (msg: string): string => {
    const lower = msg.toLowerCase();
    for (const entry of botResponses.responses) {
      if (entry.keywords.some((keyword) => lower.includes(keyword))) {
        return entry.response;
      }
    }
    return botResponses.default;
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

  // Scroll to bottom when messages change
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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
            <div ref={bottomRef} />
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
