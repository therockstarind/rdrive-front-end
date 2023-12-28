"use client"
import { Button } from "@nextui-org/react";
import { Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { MdKeyboardVoice } from "react-icons/md";


import { usePathname } from "next/navigation";
import CommandMenu from "./Menu";

const CommandMenuButton = () => {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();
  let title;
  if (pathname) {
    const segments = pathname.split('/').filter(segment => segment !== '');
    if (segments.length === 0) {
      title = "Android";
    } else {
      title = segments;
    }
  }
    return (
      <Flex className="w-full overflow-hidden" justify="center" aria-label="Search Button" gap="3" py="1">
        <Button variant="light" className="SearchButton" onPress={() => setShowModal(true)} startContent={<LiaSearchSolid size={20} />}>
          <Text className="line-clamp-1" color="gray">{title}</Text>
        </Button>
        <Button isIconOnly variant="light" className="Border hidden sm:flex p-0.5" startContent={<MdKeyboardVoice size={20}/>}>
        </Button>
        <CommandMenu showModal={showModal} setShowModal={setShowModal} />
      </Flex>
    )
}

export default CommandMenuButton;