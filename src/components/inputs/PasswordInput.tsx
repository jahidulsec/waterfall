"use client";

import React, {  useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode,
    label?: string,
  }

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, label, id, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <p className="relative">
        <Label htmlFor={id}>{label}</Label>
        <input
          type={!showPassword ? "password" : "text"}
          className={cn(
            "mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />

        <i
          className="eye absolute top-[2.75rem] right-3 cursor-pointer"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <Eye className="size-4" />
          ) : (
            <EyeOff className="size-4" />
          )}
        </i>
         {children}
      </p>
    );
  },
);

PasswordInput.displayName = "PasswordInput"

export default PasswordInput;
