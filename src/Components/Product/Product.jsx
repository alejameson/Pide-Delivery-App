import React from "react";
import { Flex, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";

export default function Product ({product}){
    const {descriProducto, imagenProducto, nombreProducto, precioProducto} = product;
    console.log(imagenProducto, "ELNOMRBREEE")
    return (
        <Flex 
            direction={["row", "row", "column", "column"]} 
            boxShadow="md" 
            justify="center"
            padding="2rem" 
            w={["27rem","28rem","25rem","25rem"]} h={["13rem","15rem","25rem","25rem"]}
        >
            <Image src={imagenProducto} w={["4rem","7rem","20rem","20rem"]} h={["4.5rem","7rem","15rem","15rem"]}/>
            <Box mx="4">
                <Text as="h2" fontSize={["sm","xl","xl","xl"]} fontWeight="bold" mb="2">
                    {nombreProducto}
                </Text>
                <Text as="h3" fontSize={["xs","lg","lg","lg"]} fontWeight="light" >
                    {descriProducto}
                </Text>
                <Text as="h3" fontSize={["xs","lg","lg","lg"]} color="white" fontWeight="light" bg="violet">
                    ${precioProducto}
                </Text>
            </Box>
            <Flex justify="center">
                <Button w={["1rem","2rem","2rem","3.5rem"]} h={["5rem","2rem","2rem","2rem"]}>+</Button>
                <Button w={["1rem","2rem","2rem","3.5rem"]} h={["5rem","2rem","2rem","2rem"]}>-</Button>
            </Flex>
        </Flex>
    )
}