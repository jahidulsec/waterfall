import LoginForm from "@/components/login/login-form";
import SocialAuthSection from "@/components/social-auth/SocialAuthSection";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <>
      {/* header */}

      <div className="header mb-[3rem]">
        <h1 className="text-3xl mb-0.5 font-medium">Merger Waterfall</h1>
        <p className="text-sm">
          If you don&apos;t have an account,{" "}
          <Link href={"/sign-up"} className="text-primary">
            Click here
          </Link>
        </p>
      </div>

      {/* form */}
      <LoginForm />

      <SocialAuthSection />

    </>
  );
}

export default LoginPage;
