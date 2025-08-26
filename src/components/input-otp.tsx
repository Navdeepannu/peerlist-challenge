"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./add-icon";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function OTPInput() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [showGlare, setShowGlare] = useState(false);
  const otpRef = useRef<HTMLDivElement>(null);

  const handleComplete = (otp: string) => {
    if (otp === "123456") {
      setStatus("success");
      // Start the glare animation after success message appears
      setTimeout(() => {
        setShowGlare(true);
      }, 800); // start glare time

      // clear inputs
      setTimeout(() => {
        setStatus("idle");
        setValue("");
        setShowGlare(false);
      }, 1400);
    } else {
      setStatus("error");

      // Reset inputs - when failed
      setTimeout(() => {
        setStatus("idle");
        setValue("");
      }, 1200);
    }
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (status !== "idle") {
      setStatus("idle");
    }
    if (newValue.length === 6) {
      handleComplete(newValue);
    }
  };

  // render message
  const getStatusMessage = () => {
    switch (status) {
      case "success":
        return "Verification successful!";
      case "error":
        return "Invalid code. Please try again.";
      default:
        return null;
    }
  };

  // Color status - success and failed
  const getStatusColor = () => {
    switch (status) {
      case "success":
        return "text-green-600 dark:text-green-700";
      case "error":
        return "text-red-700 dark:text-red-600";
      default:
        return "";
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12">
      <h1 className="text-md mb-4 flex items-center justify-center gap-2 pb-2 font-extrabold tracking-tight text-neutral-900 md:text-5xl dark:text-neutral-100">
        Interactive OTP Input
      </h1>

      <div>
        <div className="group relative mx-auto flex h-[24rem] max-w-sm flex-col items-center justify-center overflow-hidden border border-neutral-300 p-6 shadow-[0_0_0_1px_rgb(25_28_33_/_0.06),_0_5px_10px_-2px_rgb(106_115_133_/_0.12),_0_2px_6px_-2px_rgb(0_0_0_/_0.12)] dark:border-neutral-800 dark:bg-black/90 dark:shadow-none">
          {/* Corner icons */}
          <Icon className="absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -right-3 -bottom-3 h-6 w-6 text-black dark:text-white" />

          <motion.span
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 0.7, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="pointer-events-none absolute -top-15 -left-15 size-40 rounded-full bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 opacity-30 blur-3xl dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-600"
          ></motion.span>

          {/* Glare animation */}
          {showGlare && (
            <motion.div
              initial={{ x: "-150%", y: "-150%" }}
              animate={{ x: "150%", y: "150%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="pointer-events-none absolute -inset-4 z-10 blur-sm"
              style={{
                background:
                  "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
                transform: "rotate(45deg)",
                width: "200%",
                height: "200%",
              }}
            />
          )}

          <div className="flex w-full flex-col items-center justify-between gap-4 text-center">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                OTP Verification
              </h2>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                We&apos;ve sent a 6-digit code to your registered device. Enter
                it below to verify your identity.
              </p>
            </div>
            {/* OTP Input Fields */}

            <div className="mt-6" ref={otpRef}>
              <InputOTP
                maxLength={6}
                value={value}
                onChange={handleChange}
                className="gap-2"
              >
                <InputOTPGroup>
                  <InputOTPSlot
                    index={0}
                    className={`h-12 w-10 text-lg font-semibold ${status === "error" ? "text-red-600 dark:text-red-500" : status === "success" ? "border-green-600 dark:border-green-700" : ""}`}
                  />
                  <InputOTPSlot
                    index={1}
                    className={`h-12 w-10 text-lg font-semibold ${status === "error" ? "text-red-600 dark:text-red-500" : status === "success" ? "border-green-600 dark:border-green-700" : ""}`}
                  />
                  <InputOTPSlot
                    index={2}
                    className={`h-12 w-10 text-lg font-semibold ${status === "error" ? "text-red-600 dark:text-red-500" : status === "success" ? "border-green-600 dark:border-green-700" : ""}`}
                  />
                  <InputOTPSlot
                    index={3}
                    className={`h-12 w-10 text-lg font-semibold ${status === "error" ? "text-red-600 dark:text-red-500" : status === "success" ? "border-green-600 dark:border-green-700" : ""}`}
                  />
                  <InputOTPSlot
                    index={4}
                    className={`h-12 w-10 text-lg font-semibold ${status === "error" ? "text-red-600 dark:text-red-500" : status === "success" ? "border-green-600 dark:border-green-700" : ""}`}
                  />
                  <InputOTPSlot
                    index={5}
                    className={`h-12 w-10 text-lg font-semibold ${status === "error" ? "text-red-600 dark:text-red-500" : status === "success" ? "border-green-600 dark:border-green-700" : ""}`}
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* Status Message */}
            <div className="mt-4 flex h-6 items-center justify-center">
              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`text-sm font-medium ${getStatusColor()}`}
                  >
                    {getStatusMessage()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resend option */}
            <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
              Didn&apos;t receive the code?{" "}
              <button className="cursor-pointer text-neutral-700 underline hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">
                Resend OTP
              </button>
            </p>
          </div>
        </div>

        {/* Demo  */}
        <div className="mt-4 text-center">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Demo: Try entering <strong>123456</strong> for success
          </p>
        </div>
      </div>
    </div>
  );
}
