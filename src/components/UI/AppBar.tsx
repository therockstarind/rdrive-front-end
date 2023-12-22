"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Flex, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsAndroid2, BsApple } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { TbApps, TbDeviceGamepad2 } from "react-icons/tb";
import CommandMenu from "../Command/Menu";

function getPathValue(pathname: string) {
  const segments = pathname.split("/").filter(Boolean).map((segment) => segment.toLowerCase());
  const firstSegment = segments[0];

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
  const [showModal, setShowModal] = useState(false);
  return (
    <>
            <CommandMenu showModal={showModal} setShowModal={setShowModal} />
    <main className="flex justify-center">
      <Tabs 
        aria-label="AppBar Menu" 
        selectedKey={selected}
        variant="light"
        color="primary"
        keyboardActivation="manual"
        draggable
        classNames={{
          base: "AppBar flex flex-col",
          tabList: "AppBarTabList  bg-white bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md dark:bg-black",
          tab: "h-auto data-[hover-unselected=true]:opacity-80 overflow-hidden",
          tabContent: "",
          cursor: "",
          panel: "",
        }}
  
      >
        <Tab key="Android" href="/"
          title={
            <Flex direction="column" align="center">
              <BsAndroid2 size={24} />
              <Text>Android</Text>
            </Flex>
          } 
        />
        <Tab key="Apps" href="/Apps"
          title={
            <Flex direction="column" align="center">
              <TbApps size={24} />
              <Text>Apps</Text>
            </Flex>
          } 
        />
        <Tab key=""
          title={
            <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
            <Flex direction="column" align="center" className="border border-gray-400/30 p-3 rounded-full" onClick={() => setShowModal(true)}>
              <GoSearch size={24} />
            </Flex>
            </motion.div>
          } 
        />
        <Tab key="Games" href="/Games"
          title={
            <Flex direction="column" align="center">
              <TbDeviceGamepad2 size={24} />
              <Text>Games</Text>
            </Flex>
          } 
        />
        <Tab key="Apple" href="/Apple"
          title={
            <Flex direction="column" align="center">
              <BsApple size={24} />
              <Text>Apple</Text>
            </Flex>
          } 
        />
        </Tabs>
    </main>
    </>
  );
}