import React from "react";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import Product from "../Product/Product";

export default function Products ({products}) {
    return (
        <Flex
            maxW="1000px"
            w="70vw"
            direction={["column", "column", "row", "row"]}
            flexFlow="wrap"
            justify="center"
            rounded="lg"
            p="4"
        >
            {products? products.map((p, index) => <Product key={index} product={p}/>) : (<Text>CARGANDO</Text>)}
        </Flex>
    )
}