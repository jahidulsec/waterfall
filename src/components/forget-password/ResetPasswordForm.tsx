"use client";

import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PasswordInput from "../inputs/PasswordInput";
import { resetPasswordSchema } from "@/schema/forget-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { wait } from "@/lib/utils";
import Button from "../buttons/Button";
import { z } from "zod";
import { useRouter } from "next-nprogress-bar";
import { usePathname } from "next/navigation";

type FormValues = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {

    const router = useRouter()
    const pathname = usePathname()

  const {
    register,
    handleSubmit,
    formState: { isLoading, errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: FormValues) => {
    await wait(1000);
    if (data.password !== data.rePassword) {
      toast.error("Confirm password is not match with new password");
    } else {
      router.push(pathname + '/success')
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 my-2"
    >
      <p>
        <Label htmlFor="email">Email address</Label>
        <Input
          className="mt-2"
          type="text"
          id="email"
          placeholder="name@company.com"
          {...register("email")}
        />
        {errors.email && <p className="error-msg">{errors.email.message}</p>}
      </p>

      <PasswordInput id='password' label="New password" {...register("password")}>
        {errors.password && (
          <p className="error-msg">{errors.password.message}</p>
        )}
      </PasswordInput>

      <PasswordInput id="rePassword" label="Confirm your password" {...register("rePassword")}>
        {errors.rePassword && (
          <p className="error-msg">{errors.rePassword?.message}</p>
        )}
      </PasswordInput>

      <Button
        isLoading={isSubmitting || isLoading}
        disabled={isLoading || isSubmitting}
      >
        Save
      </Button>
    </form>
  );
}
