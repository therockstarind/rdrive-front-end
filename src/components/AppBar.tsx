"use client";
import { Flex, Tabs, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsAndroid2, BsApple } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { TbApps, TbDeviceGamepad2 } from "react-icons/tb";
import CommandMenu from "./Command/Menu";
import { Button } from "@nextui-org/react";

function getPathValue(pathname: string) {
  const segments = pathname.split("/").filter(Boolean).map(segment => segment.toLowerCase());
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
  const router = useRouter();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(getPathValue(pathname));

  useEffect(() => {
    setSelected(getPathValue(pathname));
  }, [pathname]);

  return (
    <Tabs.Root defaultValue={selected} className="AppBar">
      <CommandMenu showModal={showModal} setShowModal={setShowModal} />
    <Tabs.List className="AppBarTabList">
      <Tabs.Trigger value="Android" onClick={() => router.push('/')}>
          <Flex direction="column" align="center">
            <BsAndroid2 size={24} />
            <Text>Android</Text>
          </Flex>
      </Tabs.Trigger>
      <Tabs.Trigger value="Apps" onClick={() => router.push('/Apps')}>
      <Flex direction="column" align="center">
            <TbApps size={24} />
            <Text>Apps</Text>
          </Flex>
      </Tabs.Trigger>
      <Tabs.Trigger value="" onClick={() => setShowModal(true)}>
      <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
      <Button
      isIconOnly
      className="bg-transparent Border HoverBG"
      onPress={() => setShowModal(true)}
      aria-label="Search Button"
    >
      <GoSearch  size={24}/>       
    </Button>
        </motion.div>
      </Tabs.Trigger>
      <Tabs.Trigger value="Games" onClick={() => router.push('/Games')}>
      <Flex direction="column" align="center">
            <TbDeviceGamepad2 size={24} />
            <Text>Games</Text>
          </Flex>
      </Tabs.Trigger>
      <Tabs.Trigger value="Apple" onClick={() => router.push('/Apple')}>
      <Flex direction="column" align="center">
            <BsApple size={24} />
            <Text>Apple</Text>
          </Flex>
      </Tabs.Trigger>
    </Tabs.List>
    </Tabs.Root>
  );
}