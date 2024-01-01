"use client";

import { Avatar, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { SiteLogo, SiteTitle } from "®/config/site";
import CommandMenuButton from "./Command/Button";


const Navbar = () => {
    return (
        <Flex position={{initial: 'fixed', sm: 'sticky' }} p="2" className="Navbar" aria-label="NavBar">
            <Flex align="center" gap="4" className="w-full max-w-7xl">
            <Link href='/' aria-label-="RDRIVE Logo"><Avatar src={SiteLogo} alt={SiteTitle} fallback="R" /></Link>
                <CommandMenuButton />
                <Link href={''} aria-label-="User Menu"><Avatar src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" fallback="A" /></Link>
            </Flex>
        </Flex>
    )
}
export default Navbar ;