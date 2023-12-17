"use client";

import { Card, Flex, Text } from "@radix-ui/themes";

const Breadcrumb = () => {
    return (
        <Flex my="2" position="sticky" className="w-full top-14 z-40">
            <Card className="w-full bg-white bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md dark:bg-black">
                <Flex gap="2">
                    <Text size="2">Home</Text>
                    <Text size="2">/</Text>
                    <Text size="2">Apple</Text>
                </Flex>
            </Card>
        </Flex>
    )
}
export default Breadcrumb;