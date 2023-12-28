"use client";
import { Avatar, Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { SiteLogo, SiteTitle } from "®/config/site";
import useDeviceOS from "®/hooks/useDeviceOS";
import CommandMenu from "../Command/Menu";
import FooterLinks from "./FooterLinks";
import SocialFooter from "./SocialFooter";
import ThemeSwitcher from "./ThemeSwitcher";
import { Kbd } from "@nextui-org/react";

const Footer = () => {
    const [showModal, setShowModal] = useState(false);
    const os = useDeviceOS()
    const openCommandMenu = () => setShowModal(true)
    useHotkeys(`${os === 'mac' ? 'meta' : 'ctrl'}+k`, e => {
        openCommandMenu();
        e.preventDefault();
      });

    return (
        <footer className="w-full border-t border-gray-400/30 items-center px-4 md:px-1 mb-12 md:mb-0 py-6">
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-7xl" >
                <Flex justify="between"  display={{initial: 'none', sm:'flex'}}>
                    <Link href="/" passHref>
                        <Flex aria-label="RDRIVE Logo" gap="1" className="items-center">
                            <Avatar src={SiteLogo} alt={SiteTitle} fallback="R" />
                            <Text size="2">&copy; {new Date().getFullYear()}</Text>
                        </Flex>
                    </Link>
                    <Flex aria-label="ThemeSwitcher" gap="2" align="center">
                    <Button className="bg-transparent HoverBG LinkText" onClick={openCommandMenu} radius="full">
                            Command Menu
                            <Kbd>{os === 'windows' ? 'Ctrl' : '⌘'}</Kbd>
                            <Kbd>K</Kbd>
                    </Button>
                        <CommandMenu showModal={showModal} setShowModal={setShowModal} />
                        <ThemeSwitcher />
                    </Flex>
                </Flex>
                <Flex >
                        <ul className="footer_FooterLinks">
                            <li className="socialFooters">
                                <span ><SocialFooter /></span>
                                <span className="block md:hidden"><ThemeSwitcher /></span>
                            </li>
                            <FooterLinks />
                        </ul>
                </Flex>  
            </Flex>
        </footer>
    )
}
export default Footer;