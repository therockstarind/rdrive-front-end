"use client";
import { Flex, Tooltip } from "@radix-ui/themes";
import { BiDislike, BiLike } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';
import { fromRightVariant } from "®/lib/FramerMotionVariants";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import { Button } from "@nextui-org/react";

const SocialBar = () => {
    const hover = 'HoverBG Border'
    return (
      <AnimatedHeading variants={fromRightVariant}>  
        <Flex gap="3" align="center" justify="center" display={{ initial: 'flex', sm: 'none'}}>
        <Button variant="light" size="sm" className={`${hover}`}>
              3 views
          </Button>
          <Button variant="light" size="sm" className={`${hover}`}>
            <FiShare size={18} /> Share
          </Button> 
          <Tooltip content="was this help full?">
            <Flex gap="3">
            <Button variant="light" size="sm" className={`${hover}`}>
              <BiLike size={23} /> 0
            </Button> 
            <Button variant="light" size="sm" className={`${hover}`}>
              <BiDislike size={23} />
            </Button> 
            </Flex>
          </Tooltip>
        </Flex>
        <Flex gap="3" align="center" justify="center" display={{ initial: 'none', sm: 'flex'}}>
          <Tooltip content="was this help full?">
            <Flex gap="3">
            <Button variant="light" className={`${hover}`}>
              <BiLike size={23} /> 0
            </Button> 
            <Button variant="light" className={`${hover}`}>
              <BiDislike size={23} />
            </Button> 
            </Flex>
          </Tooltip>
          <Button variant="light" className={`${hover}`}>
            <FiShare size={18} /> Share
          </Button>
          <Button variant="light" className={`${hover}`}>
              3 views
          </Button> 
        </Flex>
    </AnimatedHeading>
    )
}
export default SocialBar;