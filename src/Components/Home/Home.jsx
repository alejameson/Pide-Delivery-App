import React from "react";
import { Flex  } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { VStack } from "@chakra-ui/layout";
import SectionProducts from "../SectionProducts/SectionProducts";

export default function Home() {
  return (
    <VStack justify="center">
      <Flex justify="center" w="100%" h="5em" bg="black">
        <Image
          h="100%"
          src="https://firebasestorage.googleapis.com/v0/b/pide-cloud.appspot.com/o/banner_comercios%2FPidePCREPortada2021.jpg?alt=media&token=763ac456-67e4-476d-9d2f-ddcc99a26764"
        />
      </Flex>
      {/* Secciones de Productos */}
      <SectionProducts />
    </VStack>
  );
}
