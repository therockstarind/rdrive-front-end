import { Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { fromLeftVariant } from "®/lib/FramerMotionVariants";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import SocialBar from "./SocialBar";

const Header = () => {
    return (
        <Flex justify="between" align="center" mx="2" my="4">
            <AnimatedHeading variants={fromLeftVariant}>
                <Link href="#">
                    <Heading as="h1" className="line-clamp-1">Xiaomi-12-Pro-(Dimensity-Edition)</Heading>
                </Link>
            </AnimatedHeading>       
                <div className="hidden md:flex"><SocialBar /></div>
        </Flex>
    )
}
export default Header;