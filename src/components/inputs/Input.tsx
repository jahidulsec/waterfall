import React, { ComponentProps } from "react";
import { Input as InputUi } from "@/components/ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

type InputProps = ComponentProps<"input"> & {
    children?: React.ReactNode,
    label?: string
}

function Input({ label, id, className, children, ...props }: InputProps) {
  return (
    <p>
      <Label htmlFor={id}>{label}</Label>
      <InputUi id={id} className={cn("mt-2", className)} {...props} />
      {children}
    </p>
  );
}

export default Input;
