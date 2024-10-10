import React, { ComponentProps } from "react";
import { Button as ButtonUI } from "../ui/button";
import { cn } from "@/lib/utils";
import Spinner from "../ui/spinner";

type CustomButtonProps = ComponentProps<"button"> & {
  isLoading?: boolean;
  asChild?: boolean;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
};

function Button({
  children,
  isLoading = false,
  variant= 'default',
  size='default',
  className,
  asChild=false,
  ...props
}: CustomButtonProps) {
  return (
    <ButtonUI asChild={asChild} className={cn('rounded-lg px-10 text-center', className)} {...props} variant={variant} size={size}>
      {isLoading && <Spinner className="mr-2" />}
      <span>{children}{isLoading && '...'}</span>
    </ButtonUI>
  );
}

export default Button;