"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";
import Footer from "®/components/UI/Footer";
import Navbar from "®/components/UI/Navbar";
import '®/styles/globals.css';
import '®/styles/markdown-github.css';

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter();
  return (
      <ThemeProvider attribute="class">
        <Theme>
        <NextUIProvider navigate={router.push}>
        <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
                <Navbar />
                <main className="flex w-full flex-1 flex-col overFlow_x">
                  <div className="w-full max-w-7xl items-center justify-center mx-auto p-2 my-2">
                    {children}
                  </div>
                </main>
              <Footer />
          </div>
          </NextUIProvider>
        </Theme>
      </ThemeProvider>
  )
}