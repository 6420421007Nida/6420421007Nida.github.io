import {
  Flex,
  Box,
  Heading,
  Text as ChakraText,
} from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Flex w="100%" justifyContent='center'>
        <Box >
            <Heading>Page Not Found</Heading>

            <ChakraText>
              Sorry, the page you are looking for does not exist.
            </ChakraText>
            </Box>

      </Flex>
      <Footer />
    </>
  );
};
