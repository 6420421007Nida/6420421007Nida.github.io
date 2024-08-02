import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text as ChakraText,
  Square
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const ReactPage = () => {
  return (
    <>
      <Header />
      <Flex color="white" h="calc(100vh - 10vh)">
        <Box w="300px" bg="green.500">
          <ChakraText>Box 1</ChakraText>
        </Box>
        <Box  w='100%'>
          <ChakraText>Box 2</ChakraText>
        </Box>
        <Box  w='300px'>
          <ChakraText>Box 3</ChakraText>
        </Box>
      </Flex>
      <Footer/>
    </>
  );
};
