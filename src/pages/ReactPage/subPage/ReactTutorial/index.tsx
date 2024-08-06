import {
  Heading,
  UnorderedList,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CodeBlock } from "../../../../components/CodeBlock";

export const ReactTutorials = () => (
  <>
    <Heading as="h2" size="xl">
      React Tutorial
    </Heading>
    <VStack spacing={4}>
      <Text>
        React is a powerful JavaScript library for building dynamic and
        interactive user interfaces (UIs). Developed by Facebook, React is known
        for its component-based architecture, which allows you to create
        reusable UI elements, making complex web applications easier to manage
        and maintain. React is commonly used to build single-page applications.
      </Text>
      <Text>
        In this tutorial, you’ll learn the basic to advanced concepts of React,
        including components, props, state, functional components, hooks, and
        more.
      </Text>
    </VStack>
    <Heading as="h3" size="lg" my={2}>
      Prerequisites
    </Heading>
    <Text>
      Before diving into React, you should have a basic understanding of the
      following:
    </Text>
    <UnorderedList>
      <ListItem>HTML</ListItem>
      <ListItem>CSS</ListItem>
      <ListItem>JavaScript</ListItem>
    </UnorderedList>

    <Heading as="h3" size="lg" my={2}>
      Getting Started with React: Installation and Environment Setup
    </Heading>
    <Text>
      Before starting with React, you need to set up a suitable development
      environment. Here’s a simple roadmap to get you started:
    </Text>
    <OrderedList>
      <ListItem my={2}>
        <Text>
          Node.js and npm: Download and install Node.js from here. Node.js
          provides the runtime environment for executing JavaScript code. npm
          (Node Package Manager) comes bundled with Node.js and is used to
          manage project dependencies.
        </Text>
      </ListItem>
      <ListItem my={2}>
        <Text>
          Create React App (CRA): Use Create React App (CRA) to set up a new
          React project with minimal configuration. Open your terminal and run:
        </Text>
        <CodeBlock language="bash" text={`npx create-react-app my-react-app`} />
        <Text>Replace my-react-app with your desired project name.</Text>
      </ListItem>
    </OrderedList>
    <Heading as="h2" size="xl">
      Basic Example of React
    </Heading>
    <Text mt={4}>
      Here’s a simple example of a React application. This code defines a
      functional component named App that returns JSX code displaying the text
      “Hello, The X1 Dev. Save the file and run your development server using
      npm start. Navigate to http://localhost:3000/ in your browser to view your
      webpage.
    </Text>
    <CodeBlock
      language="jsx"
      text={`import React from 'react';

function App() {
  return (
    <div>
      Hello, The X1 Dev
    </div>
  );
}

export default App;
`}
    />
    <Heading as="h3" size="lg" my={2}>
      Why Learn React?
    </Heading>
    <Text>
      React offers several exciting reasons for developers to learn it:
    </Text>
    <OrderedList>
      <ListItem>
        <Text my={2}>
          Flexibility: Once you learn React’s concepts, you can use it across
          various platforms to build quality user interfaces. React’s library
          approach allows it to evolve into a remarkable tool.
        </Text>
      </ListItem>
      <ListItem>
        <Text my={2}>
          Developer Experience: React is easier to understand and write code,
          providing a great developer experience.
        </Text>
      </ListItem>
      <ListItem>
        <Text my={2}>
          Support and Resources: React benefits from Facebook’s support,
          ensuring regular bug fixes, enhancements, and documentation updates.
        </Text>
      </ListItem>
      <ListItem>
        <Text my={2}>
          Community Support: React has broad community support, excellent
          performance, and ease of testing, making it an ideal choice for web
          development.
        </Text>
      </ListItem>
    </OrderedList>
    <Heading as="h3" size="lg" my={2}>
      Features of React
    </Heading>
    <OrderedList>
      <ListItem>
        <Heading as="h4" size="md" my={2}>
          JSX (JavaScript Syntax Extension):
        </Heading>
      </ListItem>
      <UnorderedList>
        <ListItem>
          Combines HTML and JavaScript, allowing you to embed JavaScript objects
          within HTML elements.
        </ListItem>
        <ListItem>
          Enhances code readability and simplifies UI development.
        </ListItem>
      </UnorderedList>
      <ListItem>
        <Heading as="h4" size="md" my={2}>
          Virtual DOM (Document Object Model):
        </Heading>
      </ListItem>

      <UnorderedList>
        <ListItem>
          Combines HTML and JavaScript, allowing you to embed JavaScript objects
          within HTML elements.
        </ListItem>
        <ListItem>
          Enhances code readability and simplifies UI development.
        </ListItem>
      </UnorderedList>
      <ListItem>
        <Heading as="h4" size="md" my={2}>
          One-way Data Binding:
        </Heading>
      </ListItem>
      <UnorderedList>
        <ListItem>
          Combines HTML and JavaScript, allowing you to embed JavaScript objects
          within HTML elements.
        </ListItem>
        <ListItem>
          Enhances code readability and simplifies UI development.
        </ListItem>
      </UnorderedList>
      <ListItem>
        <Heading as="h4" size="md" my={2}>
          Performance:
        </Heading>
      </ListItem>
      <UnorderedList>
        <ListItem>
          Combines HTML and JavaScript, allowing you to embed JavaScript objects
          within HTML elements.
        </ListItem>
        <ListItem>
          Enhances code readability and simplifies UI development.
        </ListItem>
      </UnorderedList>
      <ListItem>
        <Heading as="h4" size="md" my={2}>
          Extension:
        </Heading>
      </ListItem>
      <UnorderedList>
        <ListItem>
          Combines HTML and JavaScript, allowing you to embed JavaScript objects
          within HTML elements.
        </ListItem>
        <ListItem>
          Enhances code readability and simplifies UI development.
        </ListItem>
      </UnorderedList>
      <ListItem>
        <Heading as="h4" size="md" my={2}>
          Conditional Statements in JSX:
        </Heading>
      </ListItem>
      <UnorderedList>
        <ListItem>
          Combines HTML and JavaScript, allowing you to embed JavaScript objects
          within HTML elements.
        </ListItem>
        <ListItem>
          Enhances code readability and simplifies UI development.
        </ListItem>
      </UnorderedList>
      <ListItem>
        <Heading as="h4" size="md" my={2}>
          Components:
        </Heading>
      </ListItem>
      <UnorderedList>
        <ListItem>
          Combines HTML and JavaScript, allowing you to embed JavaScript objects
          within HTML elements.
        </ListItem>
        <ListItem>
          Enhances code readability and simplifies UI development.
        </ListItem>
      </UnorderedList>
    </OrderedList>
    <Heading as="h3" size="lg" my={2}>
      Core React Concepts
    </Heading>
    <Text>Here are some essential concepts to learn:</Text>
    <OrderedList>
      <ListItem>
        Props: Components can receive data from parent components through props,
        enabling you to pass information and customize component behavior.
      </ListItem>
      <ListItem>
        State: Components can manage their internal state using the useState
        hook. This state dictates the component’s appearance and behavior, and
        updates trigger re-renders.
      </ListItem>
      <ListItem>
        Lifecycle Methods: React provides lifecycle methods like
        componentDidMount and componentDidUpdate that allow you to perform
        actions at specific stages of a component’s lifecycle.
      </ListItem>
      <ListItem>
        Conditional Rendering: Control what gets displayed on the screen based
        on certain conditions using conditional statements within JSX.
      </ListItem>
    </OrderedList>
    <Heading as="h3" size="lg" my={2}>
      React Advantages
    </Heading>
    <OrderedList>
      <ListItem my={2}>
        Composable: Divide code into custom components and integrate them into
        one place.
      </ListItem>
      <ListItem my={2}>
        Declarative: React’s DOM is declarative. Create interactive UIs by
        changing the state of the component, and React updates the DOM
        accordingly.
      </ListItem>
      <ListItem my={2}>
        SEO Friendly: React affects SEO by providing a single-page application
        (SPA) that requires JavaScript to display content, which can be rendered
        and indexed.
      </ListItem>
      <ListItem my={2}>
        Community: React has a huge community, with demand from companies like
        Meta and Netflix.
      </ListItem>
      <ListItem my={2}>
        Easy to Learn: The HTML-like syntax of JSX makes React easy to learn.
        You only need basic knowledge of HTML, CSS, and JavaScript fundamentals
        to start working with it.
      </ListItem>
      <ListItem my={2}>
        Easy Debugging: React’s unidirectional data flow makes it easier to
        debug errors, as child components are nested within parent components.
      </ListItem>
    </OrderedList>
  </>
);
