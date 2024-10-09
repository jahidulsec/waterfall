import React from "react";
import { MainTable, SecondTable, ThirdTable } from "../assets/auth";
import LogoSection from "./logo-section/LogoSection";

function RightSection() {
  return (
    <section className="hidden md:block transition-all duration-500 h-full rounded-lg p-5 text-background">
      <div className="bg-primary flex flex-col justify-between h-full rounded-lg pt-10 lg:pt-[4rem] 2xl:pt-[8rem] px-[4rem] relative">
        <div className="top lg:min-h-[39rem]">
          {/* header */}
          <div className="header">
            <h2 className="text-3xl tracking-[0.025rem]">
              The smartest way to manage <br /> your{" "}
              <strong className="font-extrabold tracking-tight">merger</strong>
            </h2>
            <p className="mt-3 text-sm">
              Enter your credentials to access your account
            </p>
          </div>

          {/* images */}
          <div className="image relative my-10 max-w-xl">
            <MainTable className="w-4/5" />
            <SecondTable className="w-3/4 absolute top-10 right-0 xl:top-[4.25rem] xl:-right-[4rem]" />
            <ThirdTable className="absolute w-3/4 top-24 right-5 xl:top-[12rem] xl:right-[1rem]" />
          </div>
        </div>

        <div className="pb-10 overflow-hidden lg:pb-[2rem] 2xl:pb-[4rem]">
          <LogoSection />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
