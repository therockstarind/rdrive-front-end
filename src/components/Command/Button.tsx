"use client"
import { Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import CommandMenu from "./Menu";
import { Button } from "@nextui-org/react";

const CommandMenuButton = () => {
    const [showModal, setShowModal] = useState(false);
    return (
    <main>
    <Button
      isIconOnly
      className="bg-transparent Border HoverBG"
      onPress={() => setShowModal(true)}
      aria-label="Search Button"
    >
      <GoSearch  size={20}/>       
    </Button>
        <CommandMenu showModal={showModal} setShowModal={setShowModal} />
    </main>
    )
}

export default CommandMenuButton;