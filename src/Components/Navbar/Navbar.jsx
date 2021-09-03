import React from "react";
import { Box, Flex, Text, Grid, GridItem, Center } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

export default function Navbar() {
  return (
    <Flex>
        <Flex bg="whatsapp.300" align="center" w="100%" justify="center" justifyContent="space-evenly">
            <IconButton
                aria-label="Open Menu"
                size="lg"
                mr={2}
                icon={<HamburgerIcon />}
                bg="whatsapp.300"
            />
                <Flex >
                    <Button as="a" variant="unestyled" cursor="pointer" aria-label="Home" my={5} w="100%">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/pide-cloud.appspot.com/o/banner_comercios%2FPidePCREAvatar2021.jpg?alt=media&token=df9d9f26-395e-4977-8090-961aa656760c" w="150%" h="140%"/>
                    </Button>
                </Flex>

                <Flex >
                    <Button as="a" variant="unestyled" cursor="pointer" aria-label="About" my={5} w="100%">
                    <Image src="https://image.flaticon.com/icons/png/512/98/98668.png" w="150%" h="140%"/>
                    </Button>
                </Flex>
        </Flex>
{/* Mobile Content */}
</Flex>
  );
}
