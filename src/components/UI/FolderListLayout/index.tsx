"use client";
import React from "react";
import { Flex, Separator, Table } from "@radix-ui/themes";
import ImageCard from "./ImageCard";
import Author from "./Author";
import FileList from "./FileList";
import Readme from "./Readme";
import Header from "./Header";
import SocialBar from "./SocialBar";

const FolderListLayout = () => {
  return (
    <main>
      <Header />
      <Separator my="4" size="4" />
      <Flex className="w-full" gap="4" direction={{ initial: "column-reverse", md: "row" }}>
      <Flex className="w-full" direction="column" gap="4">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
                <Author />
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {[1,2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Table.Row key={item}>
                <Table.RowHeaderCell className="hover:bg-gray-100 dark:hover:bg-gray-400/10 hover:text-black dark:hover:text-white">
                  <FileList />
                </Table.RowHeaderCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <Readme />
       </Flex>
        <Flex className="min-w-320px" direction="column"  gap="4">
          <ImageCard />
          <Flex justify="center" className="flex md:hidden"><SocialBar /></Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default FolderListLayout;
