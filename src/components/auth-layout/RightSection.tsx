import React from "react";
import { MainTable, SecondTable, ThirdTable } from "../assets/auth";
import LogoSection from "../infinite-scroll/InfiniteScroll";

function RightSection() {
  return (
    <section className="hidden md:block transition-all duration-500 h-full rounded-lg text-background p-3 xl:p-5">
      <div className="bg-primary flex flex-col justify-between h-full rounded-lg pt-10 lg:pt-[4rem] 2xl:pt-[8rem] px-10 lg:px-[4rem] relative">
        <div className="top">
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
          <div className="image relative my-5 lg:mb-14 lg:my-4 w-full h-[18rem]">
            <MainTable className="absolute w-[90%] lg:w-[76%]" />
            <SecondTable className="absolute w-[75%] lg:w-[60%] top-[15%] lg:top-[25%] -right-[10%] lg:right-[0%]" />
            <ThirdTable className="absolute w-[80%] lg:w-[60%] top-[50%] lg:top-[65%] lg:right-[10%] -right-[5%]" />
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
