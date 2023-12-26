"use client";
import { Flex, Heading, Strong, Text } from "@radix-ui/themes";
import AnimatedHeading from "®/components/FramerMotion/AnimatedHeading";
import { fromLeftVariant } from "®/lib/FramerMotionVariants";

export default function About() {
  return (
      <Flex direction="column" justify="center" align="center" gap="4" className="mx-auto max-w-6xl" p={{initial: '2', sm: '0'}}>
      <AnimatedHeading variants={fromLeftVariant}>
        <Heading as="h1" size="8" align={{initial: 'left', md: 'center'}}>About US</Heading>
      </AnimatedHeading>
    </Flex>
  )
}
