"use client";
import { Card, Text, Tabs, Box, Flex, Heading } from "@radix-ui/themes";
import { CgReadme } from "react-icons/cg";
import { LiaComment } from "react-icons/lia";



const Readme = () => {
return (
    <Card >
        <Tabs.Root defaultValue="readme">
    <Tabs.List>
      <Tabs.Trigger value="readme"><Flex gap="2" align="center"><CgReadme />Readme</Flex></Tabs.Trigger>
      <Tabs.Trigger value="comments"><Flex gap="2" align="center"><LiaComment />Comments</Flex></Tabs.Trigger>
    </Tabs.List>

    <Box my="3">
      <Tabs.Content value="readme">
        <Heading mb="2" size="4">Typographic principles</Heading>
        <Text as="p" mb="5" size="4">
  The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography.
</Text>

<Text as="p" mb="5" size="3">
  The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography.
</Text>

<Text as="p" size="2" color="gray">
  The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography.
</Text>
      </Tabs.Content>

      <Tabs.Content value="comments">
        <Text size="2">Comments will be here.</Text>
      </Tabs.Content>
    </Box>
  </Tabs.Root>
    </Card>
)
}
export default Readme;