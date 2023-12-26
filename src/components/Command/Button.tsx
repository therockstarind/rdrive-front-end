"use client"
import { Button } from "@nextui-org/react";
import { Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";


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
      <Flex className="w-full overflow-hidden" justify="center" aria-label="Search Button">
        <Button variant="light" className="SearchButton" onPress={() => setShowModal(true)} startContent={<LiaSearchSolid size={20} />}>
          <Text className="line-clamp-1" color="gray">{title}</Text>
        </Button>
        <CommandMenu showModal={showModal} setShowModal={setShowModal} />
      </Flex>
    )
}

export default CommandMenuButton;