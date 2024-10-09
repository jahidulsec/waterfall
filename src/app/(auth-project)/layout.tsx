import RightSection from "@/components/auth-layout/RightSection";
import { Waves } from "lucide-react";
import React from "react";

export default function AuthProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" relative grid grid-cols-1 md:grid-cols-2 3xl:container mx-auto min-h-screen p-3 xl:p-5">
      {/* logo */}
      <div className="logo fixed top-3 left-3 xl:top-5 xl:left-5 flex items-center gap-2 text-primary">
        <Waves className="size-4" />
        <p className="font-semibold">Logo here</p>
      </div>

      <section className="relative place-content-center h-full px-5 lg:px-[5rem]">
        {children}
      </section>
      <RightSection />
    </main>
  );
}
