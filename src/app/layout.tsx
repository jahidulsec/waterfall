import type { Metadata } from "next";
import "./globals.css";
import ProgressProvider from "@/contexts/ProgressProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Waterfall",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ProgressProvider>
          {children}
          <Toaster richColors closeButton position='top-right' />
        </ProgressProvider>
      </body>
    </html>
  );
}
