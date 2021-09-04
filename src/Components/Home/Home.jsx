import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions";
import { Box, Flex, Text, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

export default function Home() {
  const [active, setActive] = useState("sandwich"); 

  /* Utilizamos useSelector para traernos datos del estado de nuestro store */
  const productsLoaded = useSelector((state) => state.productsLoaded);

  const sandwich = productsLoaded.filter((e) => e.idCategoria === 9);
  const pizzas = productsLoaded.filter((e) => e.idCategoria === 7);
  const fritas = productsLoaded.filter((e) => e.idCategoria === 83);
  const combos = productsLoaded.filter((e) => e.idCategoria !== 9 && e.idCategoria !== 7 && e.idCategoria !== 83);

  console.log(productsLoaded);

  /* Utilizamos useDispatch para enviar acciones a nuestro store */
  const dispatch = useDispatch();

  /* Usamos useEffect para renderizar los productos cada vez que se renderiza el componente Home */
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <VStack justify="center">
      <Flex justify="center" w="100%" h="5em" bg="black">
        <Image
          h="100%"
          src="https://firebasestorage.googleapis.com/v0/b/pide-cloud.appspot.com/o/banner_comercios%2FPidePCREPortada2021.jpg?alt=media&token=763ac456-67e4-476d-9d2f-ddcc99a26764"
        />
      </Flex>
      {/* Secciones de Productos */}
      <Flex>
        <Flex>
          <Flex justify="space-around">
            <Flex pos="relative" right="20%">
              <Button
                cursor="pointer"
                colorScheme="teal"
                variant="link"
                my={5}
                w="100%"
                onClick={() => setActive("sandwich")}
              >
                Sandwich
              </Button>
            </Flex>

            <Flex pos="relative" right="10%">
              <Button
                cursor="pointer"
                colorScheme="teal"
                variant="link"
                my={5}
                w="100%"
                onClick={() => setActive("pizzas")}
              >
                Pizzas
              </Button>
            </Flex>

            <Flex>
              <Button
                cursor="pointer"
                colorScheme="teal"
                variant="link"
                my={5}
                w="100%"
                onClick={() => setActive("fritas")}
              >
                Fritas
              </Button>
            </Flex>

            <Flex pos="relative" left="10%">
              <Button
                cursor="pointer"
                colorScheme="teal"
                variant="link"
                aria-label="Contact"
                my={5}
                w="100%"
                onClick={() => setActive("combos")}
              >
                Combos
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* Secciones de productos */}
      <Flex>
      {active === "sandwich" ? (
          <Products products={sandwich} />
      
          ) : active === "pizzas" ? (
            <Products products={pizzas} />
          
          ) : active === "fritas" ? (
            <Products products={fritas} />
          
          ) : active === "combos" ? (
            <Products products={combos} />

          ) : (
            ""
          )
      } 
      </Flex>
    </VStack>
  );
}
