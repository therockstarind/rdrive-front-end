"use client";

import { Text, Card, Grid } from "@radix-ui/themes";
import Link from "next/link";
import {Image} from "@nextui-org/image";

const FolderGridLayout = () => {
    
    return (
        <Grid columns={{ initial: "2", sm: "3", md: "4", lg: "5"}} gap="3" width="auto">
                      <Link href="" passHref className="overflow-hidden">
            <Card>
              <div className="p-4">
                <div className="relative flex h-36 items-center justify-center md:h-44">
                  <Image
                    className="my-10 h-36 object-contain object-center md:h-40"
                    src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
                    alt=""
                    isBlurred
                  />
                </div>
                <div className="flex items-start justify-center space-x-2">
                <Text size="2" >Apple</Text>
                </div>
              </div>

            </Card>
            </Link>
            <Card>
            <Link href="" passHref>
              <div className="p-4">
                <div className="relative flex h-36 items-center justify-center md:h-44">
                  <Image
                    className="my-10 h-36 object-contain object-center md:h-40"
                    src="https://cdn.worldvectorlogo.com/logos/asus-logo.svg"
                    alt=""
                    isBlurred
                  />
                </div>
                <div className="flex items-start justify-center space-x-2">
                <Text size="2" >Asus</Text>
                </div>
              </div>
            </Link>
            </Card>
            <Card>
            <Link href="" passHref>
              <div className="p-4">
                <div className="relative flex h-36 items-center justify-center md:h-44">
                  <Image
                    className="my-10 h-36 object-contain object-center md:h-40"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                    alt=""
                    isBlurred
                  />
                </div>
                <div className="flex items-start justify-center space-x-2">
                <Text size="2" >Google</Text>
                </div>
              </div>
            </Link>
            </Card>
            <Card>
            <Link href="" passHref>
              <div className="p-4">
                <div className="relative flex h-36 items-center justify-center md:h-44">
                  <Image
                    className="my-10 h-36 object-contain object-center md:h-40"
                    src="https://1000logos.net/wp-content/uploads/2021/05/HTC-logo.png"
                    alt=""
                    isBlurred
                  />
                </div>
                <div className="flex items-start justify-center space-x-2">
                <Text size="2" >HTC</Text>
                </div>
              </div>
            </Link>
            </Card>
            <Card>
            <Link href="" passHref>
              <div className="p-4">
                <div className="relative flex h-36 items-center justify-center md:h-44">
                  <Image
                    className="my-10 h-36 object-contain object-center md:h-40"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/2048px-Reliance_Jio_Logo_%28October_2015%29.svg.png"
                    alt=""
                    isBlurred
                  />
                </div>
                <div className="flex items-start justify-center space-x-2">
                <Text size="2" >JIO</Text>
                </div>
              </div>
            </Link>
            </Card>
            <Card>
            <Link href="" passHref>
              <div className="p-4">
                <div className="relative flex h-36 items-center justify-center md:h-44">
                  <Image
                    className="my-10 h-36 object-contain object-center md:h-40"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Motorola_logo.svg/2560px-Motorola_logo.svg.png"
                    alt=""
                    isBlurred
                  />
                </div>
                <div className="flex items-start justify-center space-x-2">
                <Text size="2" >Motorola</Text>
                </div>
              </div>
            </Link>
            </Card>
        </Grid>
    )
}

export default FolderGridLayout;