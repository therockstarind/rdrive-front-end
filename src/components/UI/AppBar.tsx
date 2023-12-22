"use client";
import React, { useEffect, useState } from "react";
import { BsAndroid2, BsApple, BsGooglePlay, BsWindows } from "react-icons/bs";
import Link from "next/link";
import { TbApps, TbDeviceGamepad2 } from "react-icons/tb";
import { FaAppStoreIos, FaLinux } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Tab, Tabs } from "@nextui-org/tabs";
import { GoSearch } from "react-icons/go";
import CommandMenuButton from "../Command/Button";
import { Flex, Text } from "@radix-ui/themes";

function getPathValue(pathname: string) {
  const segments = pathname.split("/").filter(Boolean).map(segment => segment.toLowerCase());
  const firstSegment = segments[0];

  if (firstSegment === "apps") {
    return "Apps";
  } else if (firstSegment === "apple" || firstSegment === "icloud") {
    return "Apple";
  } else if (firstSegment === "games") {
    return "Games";
  } else {
    return "Android";
  }
}

export default function AppBar() {
  const pathname = usePathname();
  const [selected, setSelected] = useState(getPathValue(pathname));

  useEffect(() => {
    setSelected(getPathValue(pathname));
  }, [pathname]);

  let appsTab = {
    key: "Apps",
    link: "/Apps",
    icon: <TbApps  />,
  };

  let gamesTab = {
    key: "Games",
    link: "/Games",
    icon: <TbDeviceGamepad2  />,
  };
  
  const segments = pathname.split("/").filter(Boolean).map(segment => segment.toLowerCase());

  if (segments[0] === "apps") {
    if (segments[1] === "mac-os") {
      appsTab.icon = <FaAppStoreIos  />;
    } else if (segments[1] === "linux") {
      appsTab.icon = <FaLinux  />;
    } else if (segments[1] === "windows") {
      appsTab.icon = <BsWindows  />;
    } else if (segments[1] === "android") {
      appsTab.icon = <BsGooglePlay  />;
    }
  } else if (segments[0] === "games") {
    if (segments[1] === "mac-os") {
      gamesTab.icon = <FaAppStoreIos  />;
    } else if (segments[1] === "linux") {
      gamesTab.icon = <FaLinux  />;
    } else if (segments[1] === "windows") {
      gamesTab.icon = <BsWindows  />;
    } else if (segments[1] === "android") {
      gamesTab.icon = <BsGooglePlay  />;
    }
  }

  let tabs = [
    {
      key: "Android",
      link: "/",
      icon: <BsAndroid2  />,
    },
    appsTab,
    {
      key: "",
      link: "",
      icon: <CommandMenuButton  />,
    },
    gamesTab,
    {
      key: "Apple",
      link: "/Apple",
      icon: <BsApple  />,
    },
  ];

  return (
      <main className="flex justify-center">
        <Tabs
          aria-label="AppBar Bar"
          items={tabs}
          color="primary"
          selectedKey={selected}
          classNames={{
            base: "AppBar flex flex-col",
            tab: "h-full data-[hover-unselected=true]:opacity-80",
            tabList: "AppBarTabList bg-white dark:bg-black",
            tabContent: "dark:group-data-[selected=true]:text-white text-black dark:text-white",
          }}
        >
          {(item) => (
            <Tab
              key={item.key}
              aria-label={item.key}
              title={
                <Link href={item.link} passHref>
                  <Flex direction="column" align="center">
                      <Text size="7">{item.icon}</Text>
                      <Text>{item.key}</Text>
                  </Flex>
                </Link>
              }
            />
          )}
        </Tabs>
      </main>
  );
}