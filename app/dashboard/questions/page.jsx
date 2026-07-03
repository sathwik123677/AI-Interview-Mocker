"use client";

import React from "react";

function Questions() {
  const faqs = [
    {
      question: "What is AI Interview Mocker?",
      answer:
        "AI Interview Mocker is an AI-powered platform that helps you practice technical interviews by generating personalized questions based on your job role and experience.",
    },
    {
      question: "How are interview questions generated?",
      answer:
        "Questions are generated using Google's Gemini AI based on the job role, tech stack, and years of experience you provide.",
    },
    {
      question: "Can I take multiple interviews?",
      answer:
        "Yes. You can create and practice multiple mock interviews. Premium users can access unlimited interviews.",
    },
    {
      question: "Will my interview history be saved?",
      answer:
        "Yes. Every completed interview is stored in your dashboard so you can review your previous performance anytime.",
    },
    {
      question: "How is my answer evaluated?",
      answer:
        "Your spoken answer is converted into text and analyzed by AI, which provides a rating, the correct answer, and suggestions for improvement.",
    },
    {
      question: "Do I need a microphone?",
      answer:
        "Yes. A microphone is required so you can record your answers during the mock interview.",
    },
    {
      question: "Can I use the platform on mobile?",
      answer:
        "Yes. The application is fully responsive and works on desktops, tablets, and mobile devices.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-3">
        Frequently Asked Questions
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Find answers to the most commonly asked questions about AI Interview
        Mocker.
      </p>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <summary className="cursor-pointer font-semibold text-lg">
              {faq.question}
            </summary>

            <p className="mt-4 text-gray-600 leading-7">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default Questions;