import { HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size: "lg" | "md" | "sm";
  color?: "gray";
  children: ReactNode;
}
