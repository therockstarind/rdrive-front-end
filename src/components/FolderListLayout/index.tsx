"use client";
import { Container, Flex, ScrollArea, Separator } from "@radix-ui/themes";
import { FadeContainer } from "®/lib/FramerMotionVariants";
import AnimatedDiv from "../FramerMotion/AnimatedDiv";
import Author from "./Author";
import FileList from "./FileList";
import Header from "./Header";
import ImageCard from "./ImageCard";
import Readme from "./Readme";
import SocialBar from "./SocialBar";

const FolderListLayout = () => {
  return (
    <AnimatedDiv variants={FadeContainer}>
        <Header />
      <Separator my="4" size="4" />
      <Flex className="w-full" gap="4" direction={{ initial: "column-reverse", sm: "row" }}>
      <Flex className="w-full" direction="column" gap="4">
      <Container className="ListCard">
        <div className="border-b border-gray-400/30 bg-[var(--gray-a2)] py-2"><Author /></div>
      <ScrollArea type="auto" scrollbars="vertical" className="h-52 sm:h-64 md:h-72">
        <FileList />
      </ScrollArea>  
      </Container>
        <Readme />
      </Flex>
        <Flex className="min-w-320px" direction="column"  gap="4">
          <ImageCard />
          <Flex justify="center" className="flex md:hidden"><SocialBar /></Flex>
        </Flex>
      </Flex>
    </AnimatedDiv>
  );
};

export default FolderListLayout;
