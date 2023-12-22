"use client";
import { Button, Flex, Tooltip } from "@radix-ui/themes";
import { BiDislike, BiLike } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';
import { fromRightVariant } from "®/lib/FramerMotionVariants";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";

const SocialBar = () => {
    const hover = 'HoverBG'
    return (
      <AnimatedHeading variants={fromRightVariant}>  
        <Flex gap="3" align="center" justify="center" display={{ initial: 'flex', sm: 'none'}}>
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
        <Flex gap="3" align="center" justify="center" display={{ initial: 'none', sm: 'flex'}}>
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
          <Button size="2" variant="surface" color="gray" className={`${hover}`}>
            <FiShare size={18} /> Share
          </Button>
          <Button size="2" variant="surface" color="gray" className={`${hover}`}>
              3 Views
          </Button> 
        </Flex>
    </AnimatedHeading>
    )
}
export default SocialBar;