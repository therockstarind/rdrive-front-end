"use client"
import { Text, Grid, Flex, Card } from "@radix-ui/themes";
import { Image } from "@nextui-org/image";
import AnimatedDiv from "./FramerMotion/AnimatedDiv";
import { FadeContainer, popUp } from "®/lib/FramerMotionVariants";
import { motion } from "framer-motion";
import { FolderGridProps } from "®/lib/types";
import { Card as NextUiCard } from "@nextui-org/card";

const FolderItems: FolderGridProps[]  = [
  {
    href: '/',
    title: 'Apple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/412px-Apple_Computer_Logo_rainbow.svg.png',
  },
  {
    href: '/',
    title: 'Asus',
    img: 'https://cdn.worldvectorlogo.com/logos/asus-logo.svg',
  },
  {
    href: '/',
    title: 'Google',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
  },
  {
    href: '/',
    title: 'HTC',
    img: 'https://1000logos.net/wp-content/uploads/2021/05/HTC-logo.png',
  },
  {
    href: '/',
    title: 'JIO',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/2048px-Reliance_Jio_Logo_%28October_2015%29.svg.png',
  },
  {
    href: '/',
    title: 'Motorola',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Motorola_logo.svg/2560px-Motorola_logo.svg.png',
  },
];

const FolderItem: React.FC<FolderGridProps> = ({ href, title, img, index }) => (
  <motion.div key={index} variants={popUp} aria-label={title}>
    <NextUiCard isPressable className="w-full p-0.5 shadow-none overflow-hidden">
  <Card className="w-full text-center" size={{initial:"2", sm: "4",}}>
      <Flex display="flex" justify="center" align="center" className="h-40" mb="2">
      <Image src={img} alt={title} isBlurred className="mx-auto my-10 h-40 object-center object-contain rounded-none"/>
      </Flex>
      <Text size="3">{title}</Text>
    </Card>
    </NextUiCard>
  </motion.div>
);

const FolderGridLayout = () => (
  <AnimatedDiv variants={FadeContainer}>
    <Grid columns={{ initial: "2", sm: "3", md: "4", lg: "5" }} gap="2" width="auto" aria-label="Folder List">
      {FolderItems.map((item, index) => (
        <FolderItem {...item} index={index} />
      ))}
    </Grid>
  </AnimatedDiv>
);

export default FolderGridLayout;
