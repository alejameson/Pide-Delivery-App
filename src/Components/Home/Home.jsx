import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions";
import { Box, Flex, Text, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { VStack } from "@chakra-ui/layout";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  const productsLoaded = useSelector((state) => state.productsLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <VStack justify="center">
      <Flex justify="center" w="100%" h="5em" bg="black">
          <Image h="100%" src="https://firebasestorage.googleapis.com/v0/b/pide-cloud.appspot.com/o/banner_comercios%2FPidePCREPortada2021.jpg?alt=media&token=763ac456-67e4-476d-9d2f-ddcc99a26764"/>
      </Flex>
      <Flex>
          
      </Flex>
    </VStack>
  );
}
