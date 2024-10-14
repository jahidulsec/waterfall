import Steps from "@/components/create-project/Steps";
import React from "react";

function StageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full pt-20">
      <Steps />
      <section className="pt-20">{children}</section>
    </section>
  );
}

export default StageLayout;
