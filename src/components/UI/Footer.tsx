"use client";
import { Flex, Section, Text } from "@radix-ui/themes"
import Image from "next/image";
import Link from "next/link";
import SocialFooter from "./SocialFooter";
import FooterLinks from "./FooterLinks";
import ThemeSwitcher from "./ThemeSwitcher";

const Footer = () => {
    
    return (
        <footer className="w-full border-t border-gray-400/30 items-center px-4 md:px-1 mb-12 md:mb-0">
            <div className="mx-auto w-full max-w-6xl my-6" >
            <Flex justify="between" className="flex md:hidden">
                    <Link href="/" passHref>
                        <Flex aria-label="RDRIVE Logo" gap="1" className="items-center">
                            <Image src="/icons/rdrive.png" alt="RDRIVE" width={35} height={35} /> 
                            <Text size="2">&copy; {new Date().getFullYear()}</Text>
                        </Flex>
                    </Link>
                    <Flex aria-label="Command Menu & ThemeSwitcher" gap="1" className="hidden md:flex"><ThemeSwitcher /></Flex>
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
                <Flex justify="between" className="hidden md:flex">
                    <Link href="/" passHref>
                        <Flex aria-label="RDRIVE Logo" gap="1" className="items-center">
                            <Image src="/icons/rdrive.png" alt="RDRIVE" width={35} height={35} /> 
                            <Text size="2">&copy; {new Date().getFullYear()}</Text>
                        </Flex>
                    </Link>
                    <Flex aria-label="Command Menu & ThemeSwitcher" gap="1" className="hidden md:flex"><ThemeSwitcher /></Flex>
                </Flex>              
            </div>
        </footer>
    )
}
export default Footer;