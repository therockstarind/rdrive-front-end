"use client";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Flex, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { BsAndroid2, BsApple } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { TbApps, TbDeviceGamepad2 } from "react-icons/tb";
import CommandMenu from "../Command/Menu";

const iconStyles = "data-[state=on]:text-green-400 p-2 rounded-full hover:text-[var(--accent-a11)]";

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
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="fixed items-center bottom-3 md:bottom-1 z-30 w-full sm:max-w-xs md:max-w-sm lg:max-w-md rounded-full border border-gray-400/30 overflow-hidden">
      <CommandMenu showModal={showModal} setShowModal={setShowModal} />
      <ToggleGroup.Root type="single" defaultValue={getPathValue(pathname)} aria-label="AppBar">
        <Flex justify="between" align="center" p="1" className="bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-800">
        <ToggleGroup.Item value="Android" className={iconStyles} onClick={() => router.push('/')}>
          <Flex direction="column" align="center">
            <BsAndroid2 size={24} />
            <Text>Android</Text>
          </Flex>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="Apps" className={iconStyles} onClick={() => router.push('/Apps')}>
          <Flex direction="column" align="center">
            <TbApps size={24} />
            <Text>Apps</Text>
          </Flex>
        </ToggleGroup.Item>
        <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
        <ToggleGroup.Item value="" className={`${iconStyles} border border-gray-400/30 p-3`} onClick={() => setShowModal(true)}>
          <Flex direction="column" align="center">
            <GoSearch size={24} />
          </Flex>
        </ToggleGroup.Item>
        </motion.div>
        <ToggleGroup.Item value="Games" className={iconStyles} onClick={() => router.push('/Games')}>
          <Flex direction="column" align="center">
            <TbDeviceGamepad2 size={24} />
            <Text>Games</Text>
          </Flex>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="Apple" className={iconStyles} onClick={() => router.push('/Apple')}>
          <Flex direction="column" align="center">
            <BsApple size={24} />
            <Text>Apple</Text>
          </Flex>
        </ToggleGroup.Item>
        </Flex>
      </ToggleGroup.Root>
    </main>
  );
}
