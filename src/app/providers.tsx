"use client";
import { Theme, ThemePanel } from "@radix-ui/themes";
import {ThemeProvider} from "next-themes";
import '@radix-ui/themes/styles.css';
import '®/styles/globals.css'
import Navbar from "®/components/UI/Navbar";
import Footer from "®/components/UI/Footer";
import { NextUIProvider } from "@nextui-org/react";
import AppBar from "®/components/UI/AppBar";
import { useRouter } from "next/navigation";

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter();
  return (
      <ThemeProvider attribute="class">
        <Theme>
        <NextUIProvider navigate={router.push}>
        <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
                <Navbar />
                <main className="flex w-full flex-1 flex-col">
                  <div className="w-full max-w-7xl items-center justify-center mx-auto p-2 my-2">
                    {children}
                  </div>
                </main>
              {/* <Footer /> */}
              {/* <AppBar /> */}
          </div>
          </NextUIProvider>
        </Theme>
      </ThemeProvider>
  )
}