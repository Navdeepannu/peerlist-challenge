"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AnimatedAvatar } from "@/components/animated-avatars";
import OTPInput from "@/components/input-otp";
import { people } from "@/data/people";

const cards = [
  {
    title: "Avatar Demo",
    description: "Animated avatars with tooltips.",
    href: "/components/avatar",
    preview: (
      <div className="w-full flex items-center justify-center h-32">
        <AnimatedAvatar items={people} />
      </div>
    ),
  },
  {
    title: "OTP Input",
    description: "Beautiful animated OTP input.",
    href: "/components/input-otp",
    preview: (
      <div className="w-full flex items-center justify-center h-32">
        <OTPInput />
      </div>
    ),
  },
  // Add more cards as needed
];

export default function CardShowcase() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {cards.map((card) => (
        <div
          key={card.title}
          onClick={() => router.push(card.href)}
          className="cursor-pointer rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black shadow hover:shadow-lg transition-shadow p-6 flex flex-col gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
        >
          <div className="mb-3">{card.preview}</div>
          <div className="font-bold text-lg mb-1">{card.title}</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {card.description}
          </div>
        </div>
      ))}
    </div>
  );
}
