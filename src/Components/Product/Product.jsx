import React from "react";
import { Flex, Text, VStack, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export default function Product ({product}){
    const {descriProducto, imagenProducto, nombreProducto, precioProducto} = product;
    console.log(nombreProducto, "ELNOMRBREEE")
    return (
        <VStack boxShadow="md" padding="2rem" w={["15rem","25rem","25rem","25rem"]} h={["30rem","25rem","25rem","25rem"]}>
            <Image src={imagenProducto} w={["10rem","10rem","20rem","20rem"]} h={["10rem","10rem","15rem","15rem"]}/>
            <Box mx="4">
                <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
                    {nombreProducto}
                </Text>
                <Text as="h3" fontWeight="light" fontSize="lg">
                    {descriProducto}
                </Text>
                <Text as="h3" color="white" fontWeight="light" fontSize="lg" bg="violet">
                    ${precioProducto}
                </Text>
            </Box>
        </VStack>
    )
}