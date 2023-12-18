"use client";

import { Image } from "@nextui-org/image";
import { Avatar, Box, Card, Text, Flex, Heading, Section, Separator, Table } from "@radix-ui/themes";
import { MdDownload } from "react-icons/md";


const FolderListLayout = () => {
    
    return (
        <main>
        <Heading as="h1" mx="2" className="line-clamp-1">Xiaomi-12-Pro-(Dimensity-Edition)</Heading>
        <Separator my="3" size="4" />
        <Flex className="w-full" gap="3" direction={{initial: 'column-reverse', md: 'row'}}>
         <Flex className="w-full" direction="column">
            <Card className="w-full">
            <Flex justify="between" align="center">
            <Flex gap="3" align="center">
    <Avatar
      size="3"
      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
      fallback="T"
    />
    <Box>
      <Text as="div" size="2" weight="bold">
        Teodros Girmay
      </Text>
      <Text as="div" size="2" color="gray">
        Engineering
      </Text>
    </Box>
            </Flex>
            <Flex>
            <Text as="div" size="2" color="gray">
                8 hours ago
                </Text>
            </Flex>
            </Flex>
            </Card>
         </Flex>
         <Flex className="min-w-320px" direction="column">   
         <Card className="min-w-[320px]" size={{initial:"2", sm: "4",}}>
            <Flex display="flex" justify="center" align="center" className="h-52">
                <Image src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666344481.20013313.png" alt="" isBlurred className="mx-auto h-64 object-center object-contain rounded-none"/>
            </Flex>    
        </Card>   
         </Flex> 
        </Flex>
        </main>
    )
}
export default FolderListLayout;