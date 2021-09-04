import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions";
import { Flex} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import Products from "../Products/Products";

export default function SectionProducts() {
  const [active, setActive] = useState("sandwich"); 

  /* Utilizamos useSelector para traernos datos del estado de nuestro store */
  const productsLoaded = useSelector((state) => state.productsLoaded);

  const sandwich = productsLoaded.filter((e) => e.idCategoria === 9);
  const pizzas = productsLoaded.filter((e) => e.idCategoria === 7);
  const fritas = productsLoaded.filter((e) => e.idCategoria === 83);
  const combos = productsLoaded.filter((e) => e.idCategoria !== 9 && e.idCategoria !== 7 && e.idCategoria !== 83);


  /* Utilizamos useDispatch para enviar acciones a nuestro store */
  const dispatch = useDispatch();

  /* Usamos useEffect para renderizar los productos cada vez que se renderiza el componente Home */
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <VStack justify="center" >
      {/* Secciones de Productos (botones) */}
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
      {/* setActive sections */}
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