import React from "react";

function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="3xl:container 3xl:mx-auto px-4 md:px-6 3xl:px-0">{children}</main>
    </>
  );
}

export default CustomerLayout;
