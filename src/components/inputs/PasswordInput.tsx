"use client";

import React, { ComponentProps, useState } from "react";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

type PasswordInputProps = ComponentProps<"p"> & {
  label?: string;
};

function PasswordInput({
  children,
  className,
  label = "Password",
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <p className={cn("relative", className)} {...props}>
      <Label htmlFor="password">{label}</Label>
      <Input
        type={!showPassword ? "password" : "text"}
        name="password"
        id="password"
        className="mt-2"
        placeholder="Dey3464$^*658"
      />
      <i
        className="eye absolute bottom-[0.75rem] right-3 cursor-pointer"
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
}

export default PasswordInput;