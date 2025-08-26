import { IconUserCircle, IconWorldCheck } from "@tabler/icons-react";
import { people } from "./people";
import InputOtpDemo from "@/components/inputoptDemo";
import AvatarDemo from "@/components/avatar-demo";

export const items = [
  {
    title: "Animted Avatar tooltip",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <AvatarDemo />,
    icon: <IconUserCircle className="h-4 w-4 text-neutral-500" />,
    link: "/components/avatar",
  },
  {
    title: "OTP Input Design",
    description: "Dive into the transformative power of technology.",
    header: <InputOtpDemo />,
    link: "/components/input-otp",
    icon: <IconWorldCheck className="h-4 w-4 text-neutral-500" />,
  },
];
