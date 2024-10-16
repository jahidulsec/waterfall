import React from "react";
import { Button } from "../ui/button";
import GoogleIcon from "../assets/social-auth/GoogleIcon";

function SocialAuthSection() {
  return (
    <section className="my-10">
      <div className="relative w-full">
        <div className="w-full h-[1px] bg-border"></div>
        <div className="absolute -top-3 w-full flex justify-center items-center ">
          <p className="text-muted-foreground bg-background px-4">
            Or continue with
          </p>
        </div>
      </div>

      <div className="buttons flex flex-col gap-5 mt-8">
        <Button variant={"outline"} className="flex items-center gap-2 ">
          <span className="size-4">
            <GoogleIcon />
          </span>
          Google
        </Button>
      </div>
    </section>
  );
}

export default SocialAuthSection;
