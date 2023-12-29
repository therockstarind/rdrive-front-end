"use client";
import { Card, Text, Tabs, Box, Flex, Heading, Avatar, Button, Checkbox, Popover, TextArea } from "@radix-ui/themes";
import { CgReadme } from "react-icons/cg";
import { LiaComment } from "react-icons/lia";
import Markdown from "../Markdown/Markdown";



const Readme = () => {
return (
    <Card className="bg-transparent">
        <Tabs.Root defaultValue="readme">
    <Tabs.List>
      <Tabs.Trigger value="readme"><Flex gap="2" align="center"><CgReadme />Readme</Flex></Tabs.Trigger>
      <Tabs.Trigger value="comments"><Flex gap="2" align="center"><LiaComment />Comments</Flex></Tabs.Trigger>
    </Tabs.List>

    <Box my="3">
      <Tabs.Content value="readme">
      <Markdown path="/sample.md" />
      </Tabs.Content>

      <Tabs.Content value="comments">
        <Card>
      <Flex gap="3">
      <Avatar
        size="2"
        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        fallback="A"
        radius="full"
      />
      <Box grow="1">
        <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
        <Flex mt="3" justify="end">
            <Button size="1">Comment</Button>
        </Flex>
      </Box>
      </Flex>
      </Card>
      </Tabs.Content>
    </Box>
  </Tabs.Root>
    </Card>
)
}
export default Readme;