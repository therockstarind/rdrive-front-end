"use client";

import React from "react";
import { Dialog, ScrollArea, Flex,Kbd, Box } from "@radix-ui/themes";
import { GoSearch } from "react-icons/go";
import CommandList from "./List";
import { Input } from "@nextui-org/input";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const CommandMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
          <GoSearch size="30" />
      </Dialog.Trigger>
      <Dialog.Content className="p-0 max-w-3xl CommandMenu">
      <Input type="search" variant="underlined" spellCheck placeholder="Search" autoFocus startContent={<GoSearch/>} classNames={{innerWrapper: "px-2",}}/>
        <ScrollArea type="auto" scrollbars="vertical" className="h-[60vh] sm:h-[45vh]">
              <CommandList />
        </ScrollArea>
      <Flex justify="between" align="center" p="2" className="border-t border-gray-400/30 hidden md:flex">
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
            <Kbd>Down</Kbd>
            <Kbd>Enter</Kbd>
          </Flex>        
      </Flex>  
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CommandMenu;
