"use client";
import { Flex, Heading, Link } from "@radix-ui/themes"
import AnimatedHeading from "®/components/FramerMotion/AnimatedHeading"
import { fromLeftVariant } from "®/lib/FramerMotionVariants"

export default function PrivacyPolicy() {
  return (
    <Flex direction="column" className="mx-auto max-w-6xl" p={{initial: '2', sm: '0'}}>
    <AnimatedHeading variants={fromLeftVariant}>
      <Heading as="h1" size="8" className="mb-4" align={{initial: 'left', md: 'center'}}>Terms and rules</Heading>
    </AnimatedHeading>
    </Flex>
  )
}