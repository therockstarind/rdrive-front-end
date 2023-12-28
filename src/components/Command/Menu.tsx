"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Dialog, ScrollArea, Flex, Box } from "@radix-ui/themes";
import { GoSearch } from "react-icons/go";
import CommandList from "./List";
import { Input, Kbd } from "@nextui-org/react";
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
      <Flex justify="between" align="center" p="3" className="border-t border-gray-400/30 cursor-default">
          <Flex>
          <Kbd onClick={() => setShowModal(false)} keys={['escape']} />
          </Flex>
          <Flex align="center" gap="3">
            <Kbd keys={['tab']} />
            <Kbd keys={['up']} />
            <Kbd keys={['down']} />
            <Kbd keys={['enter']} />
          </Flex>        
      </Flex>  
      </Dialog.Content>
    </Dialog.Root>
  );
};

