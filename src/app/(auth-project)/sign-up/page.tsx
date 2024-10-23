import SignUpForm from "@/components/sign-up/SignUpForm";
import SocialAuthSection from "@/components/social-auth/SocialAuthSection";
import Link from "next/link";
import React from "react";

export default function SignUpPage() {
  return (
    <>
      <div className="header mb-[3rem]">
        <h1 className="text-3xl mb-0.5 font-medium">Merger Waterfall</h1>
        <p className="text-sm">
          If you have an account,{" "}
          <Link href={"/login"} className="text-primary">
            Click here
          </Link>
        </p>
      </div>

      {/* form */}
      <SignUpForm />

      {/* social auth */}

      <SocialAuthSection />

      <p className="text-xs text-center">
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
