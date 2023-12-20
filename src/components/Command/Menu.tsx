"use client";
import React from "react";
import { Dialog, ScrollArea, IconButton, Flex,Kbd, Box } from "@radix-ui/themes";
import { GoSearch } from "react-icons/go";
import CommandList from "./List";
import { Input } from "@nextui-org/input";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const CommandMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton variant="surface" color="gray" size="4" radius="full" className="text-black dark:text-white">
          <GoSearch size="30" />
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Content className="p-0 max-w-3xl CommandMenu">
      <Input type="search" variant="underlined" placeholder="Search" autoFocus isClearable startContent={<GoSearch className="ml-2"/>}/>
        <ScrollArea type="auto" scrollbars="vertical" className="h-[60vh] sm:h-[50vh]">
              <CommandList />
        </ScrollArea>
      <Flex justify="between" align="center" p="2" className="border-t border-gray-400/30 hidden sm:flex">
          <Flex>
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
