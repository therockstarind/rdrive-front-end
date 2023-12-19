"use client";
import { Image } from "@nextui-org/image";
import { Box, Text, Flex } from "@radix-ui/themes";
import { BsImage } from "react-icons/bs";
import { RiDownloadLine } from "react-icons/ri";



const FileList = () => {
return (
        <Flex justify="between" align="center" mr="2">
          <Flex gap="2" align="center"><Box><BsImage /></Box><Text size="2" className="line-clamp-1">ice eea global images V13 0 3 0 SGMEUXM 20220915 0000 00 12 0 dc6cb84563.zip</Text></Flex>
          <Flex className="hidden md:flex" align="center"><Text size="1">24 Dec 2022</Text></Flex>
          <Flex className="hidden md:flex" align="center"><Text size="1">1.89 GB</Text></Flex>
          <Flex gap="2" align="center"><Text size="2">0</Text><Box><RiDownloadLine /></Box></Flex>
        </Flex>
)
}
export default FileList;