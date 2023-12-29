"use client";
import { Flex } from "@radix-ui/themes";
import Markdown from "®/components/Markdown/Markdown";

export default function Terms() {
  return (
    <Flex direction="column" className="mx-auto max-w-6xl" p={{initial: '2', sm: '0'}}>
    <Markdown  path="/sample.md" />
  </Flex>
  )
}
