"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      pattern="[0-9]"
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (index === 0 && ref.current) {
      ref.current.focus();
    }
  }, [index]);

  return (
    <motion.div
      ref={ref}
      tabIndex={index === 0 ? 0 : -1}
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/30 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center overflow-hidden border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[2px]",
        className,
      )}
      initial={{ scale: 1 }}
      animate={{
        scale: char ? [1, 1.05, 1] : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated character */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {char && (
            <motion.span
              key={`${index}-${char}`}
              initial={{
                y: 12,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                y: -12,
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.2,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-sm font-medium"
            >
              {char}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Fake caret */}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </motion.div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot };
