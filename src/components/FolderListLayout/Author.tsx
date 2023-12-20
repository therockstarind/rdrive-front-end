"use client";
import { Avatar, Box, Flex, Text } from "@radix-ui/themes";

const Author = () => {
return (
    <Flex justify="between" align="center" aria-label="Teodros Girmay" mx="3">
    <Flex gap="3" align="center">
      <Avatar size="3" src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop" fallback="T" />
      <Box>
        <Text as="div" size="3" weight="bold">
          Teodros Girmay
        </Text>
        <Text as="p" size="1" color="gray">
          Software & Hardware
        </Text>
      </Box>
    </Flex>
    <Flex>
      <Text as="p" size="1" color="gray">
        8 hours ago
      </Text>
    </Flex>
  </Flex>
)
}
export default Author;