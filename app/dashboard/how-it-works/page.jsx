"use client";

import React from "react";
import {
  Brain,
  Briefcase,
  Mic,
  MessageSquareText,
  Star,
  History,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Briefcase size={35} />,
      title: "Enter Job Details",
      desc: "Provide your job role, years of experience, and tech stack.",
    },
    {
      icon: <Brain size={35} />,
      title: "AI Generates Questions",
      desc: "Gemini AI creates personalized interview questions based on your profile.",
    },
    {
      icon: <Mic size={35} />,
      title: "Record Your Answers",
      desc: "Answer every question using your microphone.",
    },
    {
      icon: <MessageSquareText size={35} />,
      title: "Speech to Text",
      desc: "Your voice is converted into text automatically.",
    },
    {
      icon: <Star size={35} />,
      title: "Get AI Feedback",
      desc: "Receive ratings, ideal answers, and suggestions to improve.",
    },
    {
      icon: <History size={35} />,
      title: "Review Progress",
      desc: "Access your previous interviews anytime from your dashboard.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-3">
        How It Works
      </h1>

      <p className="text-center text-gray-500 mb-12">
        Practice interviews in six simple steps.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm p-6 hover:shadow-lg transition duration-300"
          >
            <div className="text-blue-600 mb-4">{step.icon}</div>

            <h2 className="text-xl font-bold mb-2">
              Step {index + 1}
            </h2>

            <h3 className="font-semibold mb-3">
              {step.title}
            </h3>

            <p className="text-gray-600">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;