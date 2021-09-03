import React from "react";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import Product from "../Product/Product";

export default function Products ({products}) {
    return (
        <VStack>
            {products? products.map((p, index) => <Product key={index} product={p}/>) : (<Text>CARGANDO</Text>)}
        </VStack>
    )
}