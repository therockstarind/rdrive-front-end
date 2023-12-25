"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { BsFillSunFill, BsMoon } from 'react-icons/bs';
import { RiComputerLine } from 'react-icons/ri';

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
      color="secondary"
      variant="light"
      radius="full"
      items={tabs.map((item) => item.theme)}
      selectedKey={theme}
      onSelectionChange={(selectedTheme) => handleThemeChange(selectedTheme as string)}
      classNames={{ cursor: 'ListCard !rounded-full', tabContent: 'group-data-[selected=true]:text-none text-black dark:text-white'}}
    >
      {tabs.map((item) => (
        <Tab key={item.theme} title={item.icon} aria-label={item.theme} className=''/>
      ))}
    </Tabs>
  );
};

export default ThemeSwitcher;