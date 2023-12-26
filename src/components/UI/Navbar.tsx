"use client";
import { Avatar, Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { SiteLogo, SiteTile } from "®/config/site";
import CommandMenuButton from "../Command/Button";


const Navbar = () => {
    return (
        <Flex position={{initial: 'fixed', sm: 'sticky'}} p="3" className="w-full bottom-0 left-0 right-0 z-40 justify-between items-center bg-white bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md border-t sm:border-b border-gray-400/30 dark:bg-black select-none" aria-label="NavBar">
                <Link href="/" aria-label="RDRIVE Logo"><Box  aria-label="Logo"><Image src={SiteLogo} alt={SiteTile} width={40} height={40} priority/></Box></Link>
                <Flex gap="4">
                <CommandMenuButton />
                <Link href={''} aria-label="User Menu"><Avatar src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" fallback="A" /></Link>
                </Flex>
        </Flex>
    )
}
export default Navbar ;