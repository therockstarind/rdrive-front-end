"use client";
import { Button, Flex, Kbd, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import useDeviceOS from "®/hooks/useDeviceOS";
import CommandMenu from "../Command/Menu";
import FooterLinks from "./FooterLinks";
import SocialFooter from "./SocialFooter";
import ThemeSwitcher from "./ThemeSwitcher";
import { SiteLogo, SiteTitle } from "®/config/site";

const Footer = () => {
    const [showModal, setShowModal] = useState(false);
    const os = useDeviceOS()
    const openCommandMenu = () => setShowModal(true)
    useHotkeys(`${os === 'mac' ? 'meta' : 'ctrl'}+k`, e => {
        openCommandMenu();
        e.preventDefault();
      });

    return (
        <footer className="w-full border-t border-gray-400/30 items-center px-4 md:px-1 mb-12 md:mb-0">
            <div className="mx-auto w-full max-w-7xl my-4" >
                <Flex justify="between" display={{initial: 'flex', sm: 'none'}}>
                    <Link href="/" passHref>
                        <Flex aria-label="RDRIVE Logo" gap="1" className="items-center">
                            <Image src={SiteLogo} alt={SiteTitle} width={35} height={35} priority/> 
                            <Text size="2">&copy; {new Date().getFullYear()}</Text>
                        </Flex>
                    </Link>
                </Flex>
                <Section size="1">
                        <ul className="footer_FooterLinks">
                            <li className="socialFooters">
                                <span ><SocialFooter /></span>
                                <span className="block md:hidden"><ThemeSwitcher /></span>
                            </li>
                            <FooterLinks />
                        </ul>
                </Section>  
                <Flex justify="between" align="center" display={{initial: 'none', sm: 'flex'}}>
                    <Link href="/" passHref>
                        <Flex aria-label="RDRIVE Logo" gap="1" className="items-center">
                            <Image src={SiteLogo} alt={SiteTitle} width={35} height={35} priority/> 
                            <Text size="2">&copy; {new Date().getFullYear()}</Text>
                        </Flex>
                    </Link>
                    <Flex aria-label="ThemeSwitcher" gap="2" align="center">
                    <Button className="bg-transparent HoverBG LinkText" onClick={openCommandMenu} radius="full">
                            Command Menu
                            <Kbd size="3">{os === 'windows' ? 'Ctrl' : '⌘'}</Kbd>
                            <Kbd size="3">K</Kbd>
                    </Button>
                        <CommandMenu showModal={showModal} setShowModal={setShowModal} />
                        <ThemeSwitcher />
                    </Flex>
                </Flex>              
            </div>
        </footer>
    )
}
export default Footer;