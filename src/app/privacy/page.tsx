"use client";
import { Flex, Heading, Strong, Text } from "@radix-ui/themes";
import Link from "next/link";
import AnimatedHeading from "®/components/FramerMotion/AnimatedHeading";
import Markdown from "®/components/Markdown/Markdown";
import { fromLeftVariant } from "®/lib/FramerMotionVariants";

export default function Terms() {
  return (
    <Flex direction="column" className="mx-auto max-w-6xl" p={{initial: '2', sm: '0'}}>
    <AnimatedHeading variants={fromLeftVariant}>
      <Heading as="h1" size="8" className="mb-4" align={{initial: 'left', md: 'center'}}>Privacy Policy</Heading>
    </AnimatedHeading>
    <Markdown  path="/sample.md" />
  </Flex>
  )
}
