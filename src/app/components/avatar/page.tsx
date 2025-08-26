import React from "react";
import { people } from "@/data/people";
import { AnimatedAvatar } from "@/components/animated-avatars";

const page = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-white dark:bg-black overflow-hidden">
      {/* Custom dot pattern emanating from top-left */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156, 163, 175, 0.8) 1px, transparent 0)`,
            backgroundSize: "8px 8px",
            maskImage:
              "radial-gradient(ellipse 1200px 800px at top left, black 0%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 1200 800px at top left, black 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <AnimatedAvatar items={people} />
      </div>
    </div>
  );
};

export default page;
