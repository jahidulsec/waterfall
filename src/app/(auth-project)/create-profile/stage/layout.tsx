import Steps from "@/components/steps/Steps";
import React from "react";

function StageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full pt-20">
      <Steps />
      <section className="pt-14">{children}</section>
    </section>
  );
}

export default StageLayout;
