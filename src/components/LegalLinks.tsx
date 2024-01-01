"use client"
import { DropdownMenu, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

const LegalLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
      <DropdownMenu.Root onOpenChange={handleOpenChange}>
        <DropdownMenu.Trigger>
        <li>
        <Link href={''}  className="LinkText">
        <Text size="2" className="flex items-center gap-1">
            Legal
            <GoChevronDown
              className={`h-4 w-4 transition-transform transform ${isOpen ? "rotate-180" : ""}`} />
          </Text>
        </Link>
          </li>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <Link href="/about"><DropdownMenu.Item shortcut="A">About US</DropdownMenu.Item></Link>
          <Link href="/privacy"><DropdownMenu.Item shortcut="P">Privacy Policy</DropdownMenu.Item></Link>
          <Link href="/terms"><DropdownMenu.Item shortcut="T">Terms of Service</DropdownMenu.Item></Link>
          <DropdownMenu.Separator />
          <Link href="/"><DropdownMenu.Item shortcut="R" color="green">Report & Feedback</DropdownMenu.Item></Link>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      
  );
};

export default LegalLinks;
