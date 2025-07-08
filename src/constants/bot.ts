export const botResponses = {
  responses: [
    {
      keywords: ["1+1", "what is 1 + 1", "one plus one"],
      response: "1 + 1 equals 2! 🧮",
    },
    {
      keywords: ["2+2", "what is 2 + 2", "two plus two"],
      response: "That’s 4! Basic math mastery unlocked. 🎓",
    },
    {
      keywords: ["time", "what time is it", "current time"],
      response: `It's ${new Date().toLocaleTimeString()}. ⏰`,
    },
    {
      keywords: ["date", "today's date", "what day is it"],
      response: `Today is ${new Date().toLocaleDateString()}. 📅`,
    },
    {
      keywords: ["your age", "how old are you"],
      response: "I was created in code — forever young! 🧠✨",
    },
    {
      keywords: ["creator", "who made you", "who created you"],
      response: "I was built by Michael Angelo, a passionate web developer from Santiago City, Philippines.",
    },
    {
      keywords: ["language", "what language", "programming"],
      response: "I was made using JavaScript, React, and some backend magic!",
    },

    // ✅ Existing ones
    {
      keywords: ["haha", "lol", "lmao", "rofl", "funny", "joke"],
      response: "Haha! Glad you found that funny! 😄"
    },
    {
      keywords: ["hello", "hi", "hey"],
      response: "Hello! I'm Michael Angelo, a web developer from Santiago City, Philippines. How can I assist you today?"
    },
    {
      keywords: ["help", "assist", "support"],
      response: "Sure, I'm here to help. Are you asking about Laravel, React, Vue.js, or anything tech-related?"
    },
    {
      keywords: ["skills", "tech stack", "tools"],
      response: "I'm skilled in Laravel, React, Vue.js, Inertia.js, MySQL, Tailwind CSS, and Git. Want to dive deeper into any of these?"
    },
    {
      keywords: ["experience", "ojt", "work"],
      response: "I completed my OJT at Aljay Agro-Industrial Solutions, Inc. Interested in my role or what I worked on?"
    },
    {
      keywords: ["education", "college", "school"],
      response: "I graduated with a BS in Information Technology from Northeastern College. Want more details?"
    },
    {
      keywords: ["contact", "email", "reach you"],
      response: "You can contact me at mmangaoang21@yahoo.com or visit my site at michaelangelo-dev.site."
    },
    {
      keywords: ["projects", "portfolio", "works"],
      response: "Check out my portfolio at michaelangelo-dev.site to see my latest projects and skills in action!"
    },
    {
      keywords: ["github", "code"],
      response: "Explore my projects on GitHub: github.com/michaelrrrxxz"
    },
    {
      keywords: ["facebook", "social media"],
      response: "Connect with me on Facebook: facebook.com/michaelmangaoangfb"
    },
    {
      keywords: ["linkedin", "network"],
      response: "Let's connect on LinkedIn: linkedin.com/in/michaelangelo-dev"
    },
    {
      keywords: ["about", "who are you", "introduction"],
      response: "I'm Michael Angelo, a BSIT graduate and passionate web developer focused on building modern, responsive applications. How can I help you today?"
    },
    {
      keywords: ["what can you do", "capabilities", "services"],
      response: "I specialize in full-stack web development using Laravel, React, Vue, Inertia, and more. Let me know what you need help with!"
    },
    {
      keywords: ["your name", "who are you"],
      response: "My name is Michael Angelo, your go-to web developer and IT enthusiast!"
    },
    {
      keywords: ["goodbye", "bye", "exit", "see you"],
      response: "Goodbye! Don't hesitate to return if you have more questions later."
    },
    {
      keywords: ["thank you", "thanks", "ty"],
      response: "You're welcome! Feel free to ask anytime you need assistance."
    },
    {
      keywords: [
        "tanga", "stupid", "dumb", "idiot", "fool", "useless",
        "worthless", "hopeless", "pathetic", "incompetent",
        "inept", "clueless", "ignorant", "dimwit", "moron", "imbecile"
      ],
      response: "I may not be perfect, but I'm here to help with professionalism and respect."
    },
    {
      keywords: ["joke", "funny", "laugh"],
      response: "Why did the developer go broke? Because he used up all his cache! 😄"
    },
    {
      keywords: ["weather", "temperature", "forecast"],
      response: "I can't provide weather updates, but I can assist with programming and tech-related questions!"
    }
  ],
  default: "I'm not sure how to respond to that. You can ask me about my skills, experience, projects, or how to get in touch!"
};
