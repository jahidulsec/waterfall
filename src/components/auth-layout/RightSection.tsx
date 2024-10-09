import React from "react";
import { MainTable, SecondTable, ThirdTable } from "../assets/auth";
import LogoSection from "../infinite-scroll/InfiniteScroll";

function RightSection() {
  return (
    <section className="hidden md:block transition-all duration-500 h-full rounded-lg text-background">
      <div className="bg-primary flex flex-col justify-between h-full rounded-lg pt-10 lg:pt-[4rem] 2xl:pt-[8rem] px-[4rem] relative">
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
          <div className="image relative my-10 w-full">
            <MainTable className="max-[1030px]:w-full w-[56vh] max-w-[450px] overflow-hidden min-w-[18rem]" />
            <SecondTable className="max-[1030px]:w-4/5 max-[1030px]:-right-10 w-[45vh] max-w-[327px] absolute top-10 xl:top-[9vh] xl:-right-[3rem]" />
            <ThirdTable className="absolute w-[50vh] max-w-[373px] max-[1030px]:w-4/5 max-[1030px]:-right-2 max-[1030px]:top-36 min-w-[10rem] top-24 right-5 xl:top-[23vh] xl:-right-[1rem]" />
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
