"use client";
import React from 'react';
import { Table, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { BsFillUnlockFill, BsUsbSymbol, BsApple } from 'react-icons/bs';
import { FaRupeeSign } from 'react-icons/fa';
import { MdPhonelinkSetup } from 'react-icons/md';
import { SiGithubsponsors } from 'react-icons/si';
import { TbApps, TbDeviceGamepad2 } from 'react-icons/tb';
import {  Listbox,  ListboxItem, ListboxSection} from "@nextui-org/react";

const CommandList = () => {
  const size = 'w-5 h-5';

  const links = [
    {
      href: '/Apps',
      title: 'Apps',
      description: 'Download apps for Android, MacOS, Windows, and Linux',
      icon: <TbApps className={size} />,
    },
    {
      href: '/Games',
      title: 'Games',
      description: 'Download games for Android, MacOS, Windows, and Linux',
      icon: <TbDeviceGamepad2 className={size} />,
    },
    {
      href: '/FRP',
      title: 'FRP Bypass Tools',
      description: 'Get FRP Bypass files and tools for your device',
      icon: <BsFillUnlockFill className={size} />,
    },
    {
      href: '/Drivers',
      title: 'USB Drivers',
      description: 'Download Android USB flashing drivers',
      icon: <BsUsbSymbol className={size} />,
    },
    {
      href: '/Flash-Tool',
      title: 'Flashing Tools',
      description: 'Tools for flashing mobile devices',
      icon: <MdPhonelinkSetup className={size} />,
    },
    {
      href: '/iCloud',
      title: 'iCloud Bypass Solutions',
      description: 'Say goodbye to iCloud locks: Unlock now.',
      icon: <BsApple className={size} />,
    },
    {
      href: '/service-center-price-list',
      title: 'Parts Price List',
      description: 'View the price list for parts at our service center',
      icon: <FaRupeeSign className={size} />,
    },
    {
      href: '/sponsor',
      title: 'Become a Sponsor',
      description: 'Show your support and sponsor us',
      icon: <SiGithubsponsors className={size} />,
    },
  ];

  return (
<Listbox aria-label="Command List" >
    <ListboxSection title="Suggestions"> 
      {links.map((link, index) => (
        <ListboxItem key={link.title} href={link.href} textValue={link.title} showDivider description={<div className="line-clamp-1">{link.description}</div>} startContent={link.icon}>
                  <Text size="2" className="line-clamp-1">
                    {link.title}
                  </Text>
        </ListboxItem>
      ))}
    </ListboxSection>
</Listbox>
  );
};

export default CommandList;