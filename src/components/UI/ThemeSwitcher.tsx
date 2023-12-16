"use client";
import React, { useEffect, useState } from 'react';
import { BsFillSunFill, BsMoon } from 'react-icons/bs';
import { RiComputerLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import {Tabs, Tab} from "@nextui-org/tabs";

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  const tabs = [
    {
      theme: 'light',
      icon: <BsFillSunFill />,
    },
    {
        theme: 'system',
        icon: <RiComputerLine />,
      },
    {
      theme: 'dark',
      icon: <BsMoon />,
    },
  ];

  return (
    <Tabs
      aria-label="Theme Switcher"
      size="lg"
      radius="full"
      items={tabs.map((item) => item.theme)}
      selectedKey={theme}
      onSelectionChange={(selectedTheme) => handleThemeChange(selectedTheme as string)}
      classNames={{
        tabList: 'bg-transparent overflow-hidden',
        cursor: 'bg-gradient-to-t dark:from-[#0D1117] dark:to-gray-850 shadow-none border border-gray-400/30',
        tabContent: 'dark:group-data-[selected=true]:text-white text-black dark:text-white',
      }}
    >
      {tabs.map((item) => (
        <Tab key={item.theme} title={item.icon} aria-label={item.theme}/>
      ))}
    </Tabs>
  );
};

export default ThemeSwitcher;
