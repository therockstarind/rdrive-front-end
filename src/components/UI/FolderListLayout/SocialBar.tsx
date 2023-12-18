"use client";
import { Button, Card, Flex, Tooltip } from "@radix-ui/themes";
import { BiDislike, BiLike } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';

const SocialBar = () => {
    const hover = 'hover:bg-gray-100 dark:hover:bg-gray-400/20'
    return (
        <Flex gap="3" align="center" justify="center" direction={{md: 'row-reverse'}}>
          <Button size="2" variant="surface" color="gray" className={`${hover}`}>
              3 Views
          </Button>
          <Button size="2" variant="surface" color="gray" className={`${hover}`}>
            <FiShare size={18} /> Share
          </Button> 
          <Tooltip content="was this help full?">
            <Flex gap="3">
            <Button size="2" variant="surface" color="gray" className={`${hover}`}>
              <BiLike size={23} /> 0
            </Button> 
            <Button size="2" variant="surface" color="gray" className={`${hover}`}>
              <BiDislike size={23} />
            </Button> 
            </Flex>
          </Tooltip>
      </Flex>
    )
}
export default SocialBar;