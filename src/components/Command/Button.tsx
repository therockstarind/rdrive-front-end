"use client"
import { Button } from "@nextui-org/react";
import { Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import CommandMenu from "./Menu";
import { usePathname } from "next/navigation";

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
        <Button variant="light" className="SearchButton" onPress={() => setShowModal(true)} startContent={<GoSearch  size={20}/>}>
          <h1 className="line-clamp-1" color="gray">{title}</h1>
        </Button>
        <CommandMenu showModal={showModal} setShowModal={setShowModal} />
      </Flex>
    )
}

export default CommandMenuButton;