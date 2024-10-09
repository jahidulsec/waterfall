import RightSection from "@/components/auth-layout/RightSection";
import React from "react";

export default function AuthProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 3xl:container mx-auto min-h-screen">
      {children}
      <RightSection />
    </main>
  );
}
