"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsAndroid2, BsApple } from "react-icons/bs";
import { TbApps, TbDeviceGamepad2 } from "react-icons/tb";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "@nextui-org/tabs";

// Function to extract the value based on the pathname
function getPathValue(pathname: string) {
  const segments = pathname.split("/").filter(Boolean).map(segment => segment.toLowerCase());
  const firstSegment = segments[0];

  // Map the first segment to a specific value
  switch (firstSegment) {
    case "apps":
      return "Apps";
    case "apple":
    case "icloud":
      return "Apple";
    case "games":
      return "Games";
    default:
      return "Android";
  }
}

export default function AppBar() {
  const pathname = usePathname();
  const [selected, setSelected] = useState(getPathValue(pathname));

  useEffect(() => {
    setSelected(getPathValue(pathname));
  }, [pathname]);

  const handleThemeChange = (selectedTab: string) => {
    setSelected(selectedTab);
  };

  return (
    <Tabs
      aria-label="AppBar"
      color="secondary"
      variant="bordered"
      radius="full"
      selectedKey={selected}
      onSelectionChange={(selectedTab) => handleThemeChange(selectedTab as string)}
      classNames={{
        base: "fixed items-center justify-center bottom-3 md:bottom-1 z-30 w-full max-w-md overflow-hidden px-1 dark:bg-black overflow-hidden",
        tabList: "w-full p-2 bg-white bg-gradient-to-t dark:from-[#0D1117] dark:to-gray-850 border border-gray-400/30",
        tab: "h-auto data-[hover-unselected=true]:opacity-90 overflow-hidden",
        tabContent: "group-data-[selected=true]:text-green-400 text-black dark:text-white text-xs md:text-base p-0.5",
        cursor: "bg-transparent",
        panel: "",
      }}
    >
      <Tab
        key="Android"
        title={
          <Link href="/" passHref className="flex w-full flex-col items-center">
            <BsAndroid2 size={24} />
            <span>Android</span>
          </Link>
        }
      />
      <Tab
        key="Apps"
        title={
          <Link href="/Apps" className="flex w-full flex-col items-center">
            <TbApps size={24} />
            <span>Apps</span>
          </Link>
        }
      />
      <Tab
        key=""
        title={
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex w-full flex-col items-center"
          >
            {/* <Search /> */}
          </motion.div>
        }
      />
      <Tab
        key="Games"
        title={
          <Link href="/Games" className="flex w-full flex-col items-center">
            <TbDeviceGamepad2 size={24} />
            <span>Games</span>
          </Link>
        }
      />
      <Tab
        key="Apple"
        title={
          <Link href="/Apple" className="flex w-full flex-col items-center">
            <BsApple size={24} />
            <span>Apple</span>
          </Link>
        }
      />
    </Tabs>
  );
}
