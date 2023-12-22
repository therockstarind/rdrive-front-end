"use client";
import { Image } from "@nextui-org/image";
import { Card, Flex } from "@radix-ui/themes";

const ImageCard = () => {
return (
  // <AnimatedDiv variants={popUpFromBottomForText}>
    <Card size={{ initial: "2", sm: "4" }} aria-label="Xiaomi-12-Pro-(Dimensity-Edition)">
            <Flex display="flex" justify="center" align="center" className="h-52">
              <Image
                src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666344481.20013313.png"
                alt="Xiaomi-12-Pro-(Dimensity-Edition)"
                isBlurred
                className="mx-auto h-64 object-center object-contain rounded-none"
              />
            </Flex>
    </Card>
  // </AnimatedDiv>
)
}
export default ImageCard;