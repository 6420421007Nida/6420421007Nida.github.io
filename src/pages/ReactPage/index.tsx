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
  Square,
  ListItem,
  UnorderedList,
  OrderedList,
  Code,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { LinkItemProps, NavItem } from "../../components/NavSide";

export const ReactPage = () => {
  const LinkItems: Array<LinkItemProps> = [{ name: "React" }];

  return (
    <>
      <Header />
      <Flex >
        <Box w="300px">
          {LinkItems.map((link) => (
            <NavItem key={link.name}>{link.name}</NavItem>
          ))}
        </Box>
        <Box w="100%">
          <Heading as="h2" size="xl">
            React Tutorial
          </Heading>

          <ChakraText>
            React is a powerful JavaScript library for building dynamic and
            interactive user interfaces (UIs). Developed by Facebook, React is
            known for its component-based architecture, which allows you to
            create reusable UI elements, making complex web applications easier
            to manage and maintain. React is commonly used to build single-page
            applications.
          </ChakraText>
          <ChakraText>
            In this tutorial, you’ll learn the basic to advanced concepts of
            React, including components, props, state, functional components,
            hooks, and more.
          </ChakraText>
          <Heading as="h3" size="lg">
            Prerequisites
          </Heading>
          <ChakraText>
            Before diving into React, you should have a basic understanding of
            the following:
          </ChakraText>
          <UnorderedList>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>JavaScript</ListItem>
          </UnorderedList>

          <Heading as="h3" size="lg">
            Getting Started with React: Installation and Environment Setup
          </Heading>
          <ChakraText>
            Before starting with React, you need to set up a suitable
            development environment. Here’s a simple roadmap to get you started:
          </ChakraText>
          <OrderedList>
            <ListItem>
              <ChakraText>
                Node.js and npm: Download and install Node.js from here. Node.js
                provides the runtime environment for executing JavaScript code.
                npm (Node Package Manager) comes bundled with Node.js and is
                used to manage project dependencies.
              </ChakraText>
            </ListItem>
            <ListItem>
              <ChakraText>
                Create React App (CRA): Use Create React App (CRA) to set up a
                new React project with minimal configuration. Open your terminal
                and run:
              </ChakraText>
              <Code>npx create-react-app my-react-app</Code>
              <ChakraText>
                Replace my-react-app with your desired project name.
              </ChakraText>
            </ListItem>
          </OrderedList>
          <Heading as="h3" size="lg">
            Why Learn React?
          </Heading>
          <ChakraText>
            React offers several exciting reasons for developers to learn it:
          </ChakraText>
          <OrderedList>
            <ListItem>
              <ChakraText>
                Flexibility: Once you learn React’s concepts, you can use it
                across various platforms to build quality user interfaces.
                React’s library approach allows it to evolve into a remarkable
                tool.
              </ChakraText>
            </ListItem>
            <ListItem>
              <ChakraText>
                Developer Experience: React is easier to understand and write
                code, providing a great developer experience.
              </ChakraText>
            </ListItem>
            <ListItem>
              <ChakraText>
                Support and Resources: React benefits from Facebook’s support,
                ensuring regular bug fixes, enhancements, and documentation
                updates.
              </ChakraText>
            </ListItem>
            <ListItem>
              <ChakraText>
                Community Support: React has broad community support, excellent
                performance, and ease of testing, making it an ideal choice for
                web development.
              </ChakraText>
            </ListItem>
          </OrderedList>
        </Box>
        <Box className="rightBar" w="300px"></Box>
      </Flex>
      <Footer />
    </>
  );
};
