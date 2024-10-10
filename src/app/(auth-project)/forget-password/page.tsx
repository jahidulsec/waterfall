import ForgetPasswordForm from "@/components/forget-password/ForgetPasswordForm";
import React from "react";

export default function ForgetPasswordPage() {
  return (
    <>
      <div className="header mb-[3rem]">
        <h1 className="text-3xl mb-2 font-medium">Forgot Password?</h1>
        <p className="text-sm text-muted-foreground">
          No problem, enter your account&apos;s email address and we&apos;ll
          send you a link to reset your password
        </p>
      </div>

      <ForgetPasswordForm />
    </>
  );
}
