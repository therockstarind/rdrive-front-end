"use client";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Flex } from '@radix-ui/themes';
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
  const iconStyles = "data-[state=on]:text-green-400 p-2 rounded-full hover:text-[var(--accent-a11)] data-[state=on]:border border-gray-400/30";
  return (
      <ToggleGroup.Root type="single" defaultValue={theme} aria-label="AppBar">
        <Flex gap="3" align="center" className="w-full">
        <ToggleGroup.Item value="light" className={iconStyles} onClick={() => setTheme('light')}>
        <BsFillSunFill />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="system" className={iconStyles} onClick={() => setTheme('system')}>
        <RiComputerLine />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="dark" className={iconStyles} onClick={() => setTheme('dark')}>
        <BsMoon />
          </ToggleGroup.Item>
        </Flex>
      </ToggleGroup.Root>
  );
};

export default ThemeSwitcher;
