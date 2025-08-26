"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { IconBrandX } from "@tabler/icons-react";

export const AnimatedAvatar = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    company?: string;
    twitterHandle?: string;
    email?: string;
    website?: string;
    image: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 200, damping: 30 };
  const tooltipSpringConfig = { stiffness: 200, damping: 15 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {items.map((item) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Main tooltip that expands from avatar */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.1,
                    borderRadius: "50%",
                    width: "56px",
                    height: "56px",
                    y: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    borderRadius: "12px",
                    width: "160px",
                    height: "80px",
                    y: -80,
                    transition: {
                      type: "spring",
                      stiffness: tooltipSpringConfig.stiffness,
                      damping: tooltipSpringConfig.damping,
                      mass: 0.6,
                      delay: 0,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.1,
                    borderRadius: "50%",
                    width: "56px",
                    height: "56px",
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      mass: 0.8,
                    },
                  }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                  }}
                  className="absolute top-1/2 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-4 py-3"
                >
                  {/* Morphing glass background layers */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neutral-900/98 via-neutral-800/95 to-black/98 dark:from-black/90 dark:via-black/70 dark:to-black/60 backdrop-blur-xl"
                    animate={{
                      borderRadius: ["50%", "12px"],
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                      mass: 0.6,
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-neutral-700/50 to-neutral-900/70 dark:via-black/30 dark:to-black/50"
                    animate={{
                      borderRadius: ["50%", "12px"],
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                      mass: 0.6,
                      delay: 0.05,
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 shadow-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(64, 64, 64, 0.6), transparent, rgba(82, 82, 82, 0.5), transparent, rgba(64, 64, 64, 0.6))",
                      borderRadius: "inherit",
                      padding: "1px",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                    animate={{
                      borderRadius: ["50%", "12px"],
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                      mass: 0.6,
                      delay: 0.1,
                    }}
                  />

                  {/* Morphing border gradients */}
                  <motion.div
                    className="absolute -bottom-px left-1/2 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-neutral-600/60 dark:via-zinc-400/60 to-transparent"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scaleX: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -top-px left-1/2 h-px w-[40%] -translate-x-1/2 bg-gradient-to-r from-transparent via-neutral-500/50 dark:via-zinc-300/50 to-transparent"
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                      scaleX: [0.9, 1.2, 0.9],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-0 h-[40%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-neutral-500/40 dark:via-zinc-500/40 to-transparent"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scaleY: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />

                  {/* Content that appears after expansion */}
                  <motion.div
                    className="relative z-30 text-center"
                    initial={{ opacity: 0, scale: 0.6, y: 10 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      mass: 0.6,
                      delay: 0.35,
                    }}
                  >
                    <div className="text-sm font-bold text-white drop-shadow-lg">
                      {item.name}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs text-white/90 drop-shadow-md">
                        {item.designation}
                      </span>
                      {item.twitterHandle && (
                        <motion.button
                          onClick={() =>
                            window.open(
                              `https://x.com/${item.twitterHandle}`,
                              "_blank"
                            )
                          }
                          className="flex items-center justify-center rounded-full bg-white/20 p-1 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconBrandX className="h-2.5 w-2.5 text-white" />
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="border-background relative !m-0 h-14 w-14 rounded-full border-1 dark:border-4 object-cover object-top !p-0 transition-all duration-500 ease-out group-hover:z-30 "
            animate={{
              scale: hoveredIndex === item.id ? 1.15 : 1,
              y: hoveredIndex === item.id ? -2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              mass: 0.8,
            }}
            style={{
              boxShadow:
                hoveredIndex === item.id
                  ? "0 0 30px rgba(0, 0, 0, 0.5)"
                  : "0 4px 20px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      ))}
    </div>
  );
};
