import React from "react";
import { Flex } from "@chakra-ui/layout";
import Product from "../Product/Product";

export default function Products ({products}) {
    return (
        <Flex
            maxW="1000px"
            minW="300px"
            w={["56vh", "40vh", "50vh", "70vh"]}
            direction={["column", "column", "row", "row"]}
            flexFlow="wrap"
            justify="center"
            rounded="lg"
            p="4"
        >
            {products? products.map((p, index) => <Product key={index} product={p}/>) : ""}
        </Flex>
    )
}