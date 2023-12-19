"use client";
import React from "react";
import { Dialog, TextField, Table, ScrollArea, IconButton, Flex, Text, Link } from "@radix-ui/themes";
import { GoSearch } from "react-icons/go";
import CommandList from "./List";

const CommandMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton variant="surface" color="gray" size="4" radius="full" className="text-black dark:text-white">
          <GoSearch size="30" />
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Content className="p-0 max-w-3xl CommandMenu">
              <CommandList />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CommandMenu;
