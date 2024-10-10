import ResetPasswordForm from "@/components/forget-password/ResetPasswordForm";
import Link from "next/link";
import React from "react";

function PasswordResetLinkPage() {
  return (
    <>
      <div className="header mb-[3rem]">
        <h1 className="text-3xl mb-2 font-medium">Forgot Password?</h1>
        <p className="text-sm text-muted-foreground">
          No problem, enter your account&apos;s email address and we&apos;ll
          send you a link to reset your password
        </p>
      </div>

      <ResetPasswordForm />

      <p className="text-xs text-center mt-5">
        By signing up, you agree to the{" "}
        <Link href={""} className="text-primary underline">
          Terms and Conditions
        </Link>{" "}
        and{" "}
        <Link href={""} className="text-primary underline">
          Privacy Policy
        </Link>
        .
      </p>
    </>
  );
}

export default PasswordResetLinkPage;
