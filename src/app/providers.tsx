"use client";
import { Theme, ThemePanel } from "@radix-ui/themes";
import {ThemeProvider} from "next-themes";
import '@radix-ui/themes/styles.css';
import '®/styles/globals.css'
import Navbar from "®/components/UI/Navbar";
import Footer from "®/components/UI/Footer";
import { NextUIProvider } from "@nextui-org/system";

export function Providers({children}: { children: React.ReactNode }) {
  return (
      <ThemeProvider attribute="class">
        <Theme appearance="dark" accentColor="crimson" panelBackground="solid" radius="small">
        <NextUIProvider>
        <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
                <main className="flex w-full flex-1 flex-col">
                  <Navbar />
                  <div className="mx-auto w-full max-w-6xl mt-20 p-2">
                    {children}
                  </div>
                </main>
              <Footer />
              {/* <Bar /> */}
          </div>
          </NextUIProvider>
        </Theme>
      </ThemeProvider>
  )
}