"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { Icon } from "./add-icon";

const InputOtpDemo = () => {
  const [value, setValue] = useState("12345");
  const [status] = useState<"success">("success");

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black">
      {/* Background decoration */}
      <motion.div
        className="pointer-events-none absolute -top-10 -left-10 h-20 w-20 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400 opacity-40 blur-xl dark:from-neutral-400 dark:to-neutral-500"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
        {/* Title */}
        <div className="text-center">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            OTP Verification
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Interactive input with animations
          </p>
        </div>

        {/* OTP Input - Compact version */}
        <div className="scale-90">
          <InputOTP
            maxLength={6}
            value={value}
            onChange={setValue}
            className="gap-1"
          >
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
                className="h-8 w-6 border-green-500 text-sm font-semibold"
              />
              <InputOTPSlot
                index={1}
                className="h-8 w-6 border-green-500 text-sm font-semibold"
              />
              <InputOTPSlot
                index={2}
                className="h-8 w-6 border-green-500 text-sm font-semibold"
              />
              <InputOTPSlot
                index={3}
                className="h-8 w-6 border-green-500 text-sm font-semibold"
              />
              <InputOTPSlot
                index={4}
                className="h-8 w-6 border-green-500 text-sm font-semibold"
              />
              <InputOTPSlot
                index={5}
                className="h-8 w-6 text-sm font-semibold"
              />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
    </div>
  );
};

export default InputOtpDemo;
