"use client";
import { Button, Card, Flex, Tooltip } from "@radix-ui/themes";
import { BiDislike, BiLike } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';

const SocialBar = () => {
    return (
        <Flex gap="3" align="center" justify="center">
          <Button variant="surface" size="2" color="teal">
              3 Views
          </Button>
          <Button variant="surface" size="2" color="sky">
              <FiShare size={18} /> Share
            </Button> 
            <Flex gap="2">
            <Button variant="surface" size="2">
              <BiLike size={23} /> 0
            </Button> 
            <Button variant="surface" size="2">
              <BiDislike size={23} />
            </Button> 
            </Flex>
      </Flex>
    )
}
export default SocialBar;