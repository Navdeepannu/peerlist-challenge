import React from "react";
import { AnimatedAvatar } from "./animated-avatars";

const AvatarDemo = () => {
  const people = [
    {
      id: 1,
      name: "Navdeep Singh",
      designation: "Dev",
      twitterHandle: "navdeepannu",
      image: "/avatar.webp",
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      designation: "Lead Developer",
      twitterHandle: "navdeepannu",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Maya Patel",
      designation: "Head of Design",
      twitterHandle: "navdeepannu",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 4,
      name: "David Kim",
      designation: "Product Manager",
      twitterHandle: "navdeepannu",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
    },
    {
      id: 5,
      name: "Lisa Johnson",
      designation: "Director",
      twitterHandle: "navdeepannu",
      image:
        "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "James Wilson",
      designation: "CTO",
      company: "TechFlow",
      twitterHandle: "jameswilsontech",
      email: "james@techflow.com",
      website: "https://jameswilson.tech",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
  ];
  return <AnimatedAvatar items={people} />;
};

export default AvatarDemo;
