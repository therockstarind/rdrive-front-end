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
        <Table.Root className="w-full">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
              <TextField.Root>
                <TextField.Slot>
                  <GoSearch size="18" />
                </TextField.Slot>
                <TextField.Input size="3" placeholder="Search…" className="text-sm"/>
              </TextField.Root>
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <ScrollArea type="auto" scrollbars="vertical" className="h-[60vh] sm:h-[50vh]">
              <CommandList />
            </ScrollArea>
          </Table.Body>
          <Table.Header className="border-t border-gray-400/30">
            <Flex align="center" justify="between" mx="2" p="1">
              <Link>Search</Link>
              <Link>Give feedback</Link>
            </Flex>
          </Table.Header>
        </Table.Root>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CommandMenu;
