import { ShieldCheck } from "@/components/assets/success";
import { Button } from "@/components/ui/button";
import React from "react";

function PasswordResetSuccessPage() {
  return (
    <div className="flex flex-col gap-20">
      <article className="flex flex-col justify-center items-center gap-5">
        <ShieldCheck />

        <h2 className="text-4xl font-semibold text-foreground/85">Success!</h2>

        <p className="text-center text-sm">
          Your password has been updated and is secure. <br /> You can now login again
        </p>
      </article>

      <Button>Continue</Button>
    </div>
  );
}

export default PasswordResetSuccessPage;
