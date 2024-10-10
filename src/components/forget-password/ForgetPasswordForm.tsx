"use client";

import React from "react";
import Button from "../buttons/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { forgetPasswordSchema } from "@/schema/forget-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { wait } from "@/lib/utils";
import { toast } from "sonner";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";

type FormValues = z.infer<typeof forgetPasswordSchema>;

export default function ForgetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(forgetPasswordSchema),
  });

  const onSubmit = async (data: FormValues) => {
    await wait(1000);
    toast.success("An password reset link is sent to your email");
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
          id="email"
          {...register("email")}
          placeholder="name@company.com"
        />
        {errors.email && <p className="error-msg">{errors.email.message}</p>}
      </p>

      <div className="flex flex-col gap-2">
        <Button
          type="submit"
          disabled={isLoading || isSubmitting}
          isLoading={isLoading || isSubmitting}
        >
          Send Reset Link
        </Button>
        <Button asChild type="button" variant={"link"}>
          <Link href={"/login"}>Return to Login</Link>
        </Button>
      </div>
    </form>
  );
}
