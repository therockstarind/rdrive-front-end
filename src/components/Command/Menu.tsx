"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Dialog, ScrollArea, Flex,Kbd, Box } from "@radix-ui/themes";
import { GoSearch } from "react-icons/go";
import CommandList from "./List";
import { Input } from "@nextui-org/input";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function CommandMenu({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {

  return (
    <Dialog.Root open={showModal} onOpenChange={setShowModal}>
      <Dialog.Content className="p-0 max-w-3xl CommandMenu">
      <Input type="search" variant="underlined" spellCheck placeholder="Search" autoFocus startContent={<GoSearch/>} classNames={{innerWrapper: "px-2",}}/>
        <ScrollArea type="auto" scrollbars="vertical" className="h-[60vh] sm:h-[45vh]">
              <CommandList />
        </ScrollArea>
      <Flex justify="between" align="center" p="3" className="border-t border-gray-400/30">
          <Flex>
          <Kbd>Esc</Kbd>
          </Flex>
          <Flex align="center" gap="3">
            <Kbd>Tab</Kbd>
            <Kbd>
              <Box p="1" ><FaArrowUp /></Box>
            </Kbd>
            <Kbd>
              <Box p="1" ><FaArrowDown /></Box>
            </Kbd>
            <Kbd>Enter</Kbd>
          </Flex>        
      </Flex>  
      </Dialog.Content>
    </Dialog.Root>
  );
};

