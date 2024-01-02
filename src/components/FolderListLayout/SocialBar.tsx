"use client";
import { Flex, Tooltip } from "@radix-ui/themes";
import { BiDislike, BiLike } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';
import { fromRightVariant } from "®/lib/FramerMotionVariants";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import { Button, ButtonGroup, Divider } from "@nextui-org/react";

const SocialBar = () => {
    const hover = 'HoverBG Border'
    return (
      <AnimatedHeading variants={fromRightVariant}>  
        <Flex gap="3" align="center" justify="center" display={{ initial: 'flex', sm: 'none'}}>
        <Button variant="light"  className={`${hover}`}>
              3 views
          </Button>
          <Button variant="light"  className={`${hover}`}>
            <FiShare size={18} /> Share
          </Button> 
          <Flex gap="3">
            <Tooltip content="was this help full?">
            <ButtonGroup variant="light" className="Border" radius="sm" >
            <Button>
              <BiLike size={23} /> 0
            </Button> 
            <Divider orientation="vertical" />
            <Button isIconOnly>
              <BiDislike size={23} />
            </Button> 
            </ButtonGroup>
            </Tooltip>
            </Flex>
        </Flex>


        <Flex gap="3" align="center" justify="center" display={{ initial: 'none', sm: 'flex'}}>
            <Flex gap="3">
            <Tooltip content="was this help full?">
            <ButtonGroup variant="light" className="Border" radius="sm">
            <Button>
              <BiLike size={23} /> 0
            </Button> 
            <Divider orientation="vertical" />
            <Button isIconOnly>
              <BiDislike size={23} />
            </Button> 
            </ButtonGroup>
            </Tooltip>
            </Flex>
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