import { HTMLAttributes, ReactNode } from "react";
import { FcGoogle as googleIcon } from "react-icons/fc";

export const icons = {
  googleIcon,
};

type IconNames = keyof typeof icons;

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: IconNames;
  variant?: "bold";
  children: ReactNode;
  color?: "red" | "blue" | "pink" | "gray" | "green" | "white";
}
