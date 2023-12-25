"use client";
import { Flex, Heading, Strong, Text } from "@radix-ui/themes";
import AnimatedHeading from "®/components/FramerMotion/AnimatedHeading";
import { fromLeftVariant } from "®/lib/FramerMotionVariants";

export default function About() {
  return (
      <Flex direction="column" justify="center" align="center" gap="4" className="mx-auto max-w-5xl" p={{initial: '2', sm: '0'}}>
      <AnimatedHeading variants={fromLeftVariant}>
        <Heading as="h1" size="8" align={{initial: 'left', md: 'center'}}>About US</Heading>
      </AnimatedHeading>
      <Text>
        Welcome to <Strong>RDRIVE,</Strong> your ultimate destination for all things mobile firmware. We pride ourselves on being the go-to platform for hosting a comprehensive collection of <Strong>Mobile Firmware, Flash File, Flash Tool, Custom ROMs, Recoveries, TWRP, Dump Files, Drivers, Combination, and eMMC ISP Pinout.</Strong> Our mission is to ensure that these vital resources are readily available to empower you in maximizing the potential of your mobile devices.
      </Text>
      <Text>
      At <Strong>RDRIVE,</Strong> we understand the importance of having access to the latest firmware files and tools. That's why our dedicated team curates and develops an extensive library of files, sourced both internally and from other reputable websites. By hosting these files on our servers, we guarantee their long-term availability, eliminating the frustration of broken or inaccessible links.
      </Text>
      <Text>
      Our server is open and free for all users, allowing you to download files effortlessly. However, we also encourage collaboration and community engagement. If you have valuable files that you would like to share with the mobile community, you can contact us for permission to upload them to our platform. We believe in fostering a spirit of collaboration and knowledge-sharing to benefit mobile enthusiasts and professionals alike.
      </Text>
      <Text>
      Join our thriving community of tech-savvy individuals, developers, and enthusiasts who rely on <Strong>RDRIVE</Strong> as their trusted resource. Discover the latest firmware updates, explore custom ROMs to personalize your mobile experience, recover data with ease, and access the tools and drivers you need for successful device flashing. Unleash the true potential of your mobile devices with <Strong>RDRIVE</Strong> today.
      </Text>
      <Text>
      Remember, at <Strong>RDRIVE,</Strong> we're here to support you every step of the way. If you have any questions, suggestions, or need assistance, don't hesitate to reach out to our friendly team. Together, let's create a vibrant and knowledgeable community where mobile technology knows no boundaries. Start your journey with <Strong>RDRIVE</Strong> and unlock a world of possibilities for your mobile devices.
      </Text>
    </Flex>
  )
}
