import Steps from "@/components/create-project/Steps";
import React from "react";

function StageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full pt-20">
      <Steps />
      {children}
    </section>
  );
}

export default StageLayout;
