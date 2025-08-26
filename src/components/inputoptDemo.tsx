"use client";
import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./ui/input-otp";

const InputOtpDemo = () => {
  return (
    <div className="w-full max-w-xs mx-auto p-4 rounded-xl bg-white dark:bg-black shadow flex flex-col items-center justify-center gap-4">
      <InputOTP maxLength={6} className="gap-2 mb-3">
        <InputOTPGroup>
          <InputOTPSlot index={0} autoFocus />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex gap-2 w-full mt-2"></div>
    </div>
  );
};

export default InputOtpDemo;
