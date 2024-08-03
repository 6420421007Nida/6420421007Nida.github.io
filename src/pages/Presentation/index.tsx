import {
  Box,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export const Presentation = () => {
  const navigate = useNavigate();

  const goToReact = () => {
    navigate("/react");
  };
  return (
    <>
      <Header />
      <Container maxW='4xl'>
        <Box>
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
              <Heading size="md">Web Development</Heading>
            </Box>
            <Spacer />
          </Flex>
        </Box>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card>
            <CardHeader>
              <Heading size="md"> React</Heading>
            </CardHeader>
            <CardFooter>
              <Button onClick={goToReact}>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
        <Box>
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
              <Heading size="md">Language</Heading>
            </Box>
            <Spacer />
          </Flex>
        </Box>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card>
            <CardHeader>
              <Heading size="md"> Javascript</Heading>
            </CardHeader>
            <CardFooter>
              <Button disabled>TBC</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
        <Box>
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
              <Heading size="md">Database</Heading>
            </Box>
            <Spacer />
          </Flex>
        </Box>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card>
            <CardHeader>
              <Heading size="md"> SQL</Heading>
            </CardHeader>
            <CardFooter>
              <Button >TBC</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
        <Box>
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
              <Heading size="md">DSA</Heading>
            </Box>
            <Spacer />
          </Flex>
        </Box>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card>
            <CardHeader>
              <Heading size="md"> Array</Heading>
            </CardHeader>
            <CardFooter>
              <Button >TBC</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
};
