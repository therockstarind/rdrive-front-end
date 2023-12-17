"use client";

import { Card, Flex, Text } from "@radix-ui/themes";
import { FaArrowRight } from "react-icons/fa";

const Breadcrumb = () => {
    return (
            <Card my="2" className="w-full">
                <Flex gap="2" align="center" >
                    <Text size="2">Home</Text>
                    <Text size="2"><FaArrowRight /></Text>
                    <Text size="2">Apple</Text>
                    <Text size="2"><FaArrowRight /></Text>
                    <Text size="2">Apple</Text>
                    <Text size="2"><FaArrowRight /></Text>
                    <Text size="2">Apple</Text>
                    <Text size="2"><FaArrowRight /></Text>
                    <Text size="2">Apple</Text>
                </Flex>
            </Card>
    )
}
export default Breadcrumb;