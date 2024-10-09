import LoginForm from "@/components/login/login-form";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <>
      {/* header */}

      <div className="header mb-[3rem]">
        <h1 className="text-3xl mb-0.5 font-semibold">Waterfall Merger</h1>
        <p className="text-sm">
          If you don&apos;t have an account{" "}
          <Link href={""} className="text-primary">
            Click here
          </Link>
        </p>
      </div>

      {/* form */}
      <LoginForm />

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

export default LoginPage;
