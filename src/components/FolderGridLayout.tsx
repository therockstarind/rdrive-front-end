"use client"
import { Image } from "@nextui-org/image";
import { Card, Flex, Grid, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Link from "next/link";
import { FadeContainer, fromLeftVariant } from "®/lib/FramerMotionVariants";
import { FolderGridProps } from "®/lib/types";
import AnimatedDiv from "./FramerMotion/AnimatedDiv";

const FolderItems: FolderGridProps[]  = [
  {
    href: '/hello',
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
    title: 'Xiaomi-12-Pro-(Dimensity-Edition)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/2048px-Reliance_Jio_Logo_%28October_2015%29.svg.png',
  },
  {
    href: '/',
    title: 'Redmi K20 Pro',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Motorola_logo.svg/2560px-Motorola_logo.svg.png',
  },
];

const FolderItem: React.FC<FolderGridProps> = ({ href, title, img, index }) => {

return (
  <Link href={'/Xiaomi-12-Pro-(Dimensity-Edition)'} passHref>
  <motion.div key={index} variants={fromLeftVariant} aria-label={title}>
    <Card className="HoverBG" size={{initial:"2", sm: "4",}}>
      <Flex display="flex" justify="center" align="center" className="h-40" mb="2">
      <Image src={img} alt={title} isBlurred className="mx-auto my-10 h-40 object-center object-contain rounded-none"/>
      </Flex>
      <Text size="3" className="text-center line-clamp-1">{title}</Text>
    </Card>
  </motion.div>
  </Link>
);
}

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
