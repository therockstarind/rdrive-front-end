"use client";
import React from "react";
import { Dialog, TextField, Table, ScrollArea } from "@radix-ui/themes";
import { GoSearch } from "react-icons/go";
import CommandList from "./List";

const CommandMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="bg-green-500 p-2 rounded-full">
          <GoSearch className="text-white" size="30" />
        </div>
      </Dialog.Trigger>
      <Dialog.Content className="p-0 max-w-3xl">
        <Table.Root className="w-full">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
              <TextField.Root>
                <TextField.Slot>
                  <GoSearch size="18" />
                </TextField.Slot>
                <TextField.Input size="3" placeholder="Search…" />
              </TextField.Root>
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <ScrollArea type="auto" scrollbars="vertical" className="h-[50vh]">
              <CommandList />
            </ScrollArea>
          </Table.Body>
        </Table.Root>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CommandMenu;
