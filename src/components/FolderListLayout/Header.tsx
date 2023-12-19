import { Button, Flex, Heading } from "@radix-ui/themes";
import SocialBar from "./SocialBar";

const Header = () => {
    return (
        <Flex justify="between" align="center" mx="2" my="4">
            <Heading as="h1"  className="line-clamp-1">Xiaomi-12-Pro-(Dimensity-Edition)</Heading>
            <div className="hidden md:flex"><SocialBar /></div>
        </Flex>
    )
}
export default Header;