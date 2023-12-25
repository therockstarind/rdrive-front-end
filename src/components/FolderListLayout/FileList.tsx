"use client";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { FaArchive, FaFolder } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
import { RiDownloadLine } from "react-icons/ri";
import { SiApple } from "react-icons/si";


const List = [
  {
    href: '/Apps',
    title: 'Apple',
    size: '42.89 GB',
    date: '24 Dec 2022',
    download: '0',
    icon: <FaFolder  />,
  },
  {
    href: '/Games',
    title: 'FRP Files',
    size: '122.79 GB',
    date: '24 Dec 2022',
    download: '0',
    icon: <FaFolder  />,
  },
  {
    href: '/FRP',
    title: 'Pixel Rom',
    size: '21.89 GB',
    date: '24 Dec 2022',
    download: '0',
    icon: <FaFolder  />,
  },
  {
    href: '/Drivers',
    title: 'ice eea global images V13 0 3 0 SGMEUXM 20220915 0000 00 12 0 dc6cb84563.zip',
    size: '2.89 GB',
    date: '24 Dec 2022',
    download: '5',
    icon: <FaArchive  />,
  },
  {
    href: '/Flash-Tool',
    title: 'Windows 11.iso',
    size: '11.89 GB',
    date: '24 Dec 2022',
    download: '9',
    icon: <BsFillRecordCircleFill  />,
  },
  {
    href: '/iCloud',
    title: 'iRemovel Pro.pkg',
    size: '5.98 GB',
    date: '24 Dec 2022',
    download: '0',
    icon: <SiApple  />,
  },
  {
    href: '/service-center-price-list',
    title: 'Office.exe',
    size: '8.80 GB',
    date: '24 Dec 2022',
    download: '8',
    icon: <MdInstallDesktop  />,
  },
  {
    href: '/sponsor',
    title: 'Chrome.exe',
    size: '1.89 GB',
    date: '24 Dec 2022',
    download: '3',
    icon: <MdInstallDesktop  />,
  },
];

const FileList = () => {
return (
  
<Listbox aria-label="File List">
      {List.map((list) => (
        <ListboxItem key={list.title} textValue={list.title} showDivider>
        <Flex className="grid grid-cols-10 items-center">
            <Flex className="flex col-span-9 md:col-span-6" align="center" gap="2">
                <Box>{list.icon}</Box>
                <Text className="!truncate" size="3">{list.title}</Text>
            </Flex>
            <Text className="md:block hidden text-center col-span-2" size="1">
                {list.date}
            </Text>
            <Text className="md:block hidden text-center col-span-1" size="1">
                {list.size}
            </Text>
            <Flex gap="2" align="center" justify="center" className="text-center col-span-1"><Text size="1">{list.download}</Text><RiDownloadLine /></Flex>
        </Flex>
        </ListboxItem>
      ))}
</Listbox>
)
}
export default FileList;