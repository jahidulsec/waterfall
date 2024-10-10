import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const wait = async (time: number) => {
  await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
