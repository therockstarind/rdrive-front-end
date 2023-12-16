"use client";

import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
    return (
        <Flex position="fixed" py="2" className="w-full justify-between items-center bg-white bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md border-b border-gray-400/30 dark:bg-black select-none px-2">
                <Box aria-label="Logo"><Image src="/icons/rdrive.png" alt="RDRIVE" width={40} height={40} /></Box>
                <Box aria-label="Logo"><FaUserCircle size="35" /></Box>
        </Flex>
    )
}
export default Navbar ;