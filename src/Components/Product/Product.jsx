import React from "react";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export default function Product ({product}){
    const {descriProducto, imagenProducto, nombreProducto, precioProducto} = product;
    console.log(nombreProducto, "ELNOMRBREEE")
    return (
        <VStack>
            <Image src={imagenProducto || "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"} w="30%" h="30%"/>
            <Text>{nombreProducto}</Text>
            <Text>{descriProducto}</Text>
            <Text>{precioProducto}</Text>
        </VStack>
    )
}