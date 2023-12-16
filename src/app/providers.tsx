"use client";
import { Theme, ThemePanel } from "@radix-ui/themes";
import {ThemeProvider} from "next-themes";
import '@radix-ui/themes/styles.css';
import '®/styles/globals.css'
import Navbar from "®/components/UI/Navbar";

export function Providers({children}: { children: React.ReactNode }) {
  return (
      <ThemeProvider attribute="class">
        <Theme>
        <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
                <main className="flex w-full flex-1 flex-col bg-white dark:bg-black">
                  <Navbar />
                  <div className="mx-auto w-full max-w-6xl mt-20 p-2">
                    {children}
                  </div>
                </main>
              {/* <Footer />
              <Bar /> */}
          </div>
           {/* <ThemePanel />  */}
        </Theme>
      </ThemeProvider>
  )
}