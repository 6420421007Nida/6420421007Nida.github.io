import {
  Box,
  Flex,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { LinkItemProps, NavItem } from "../../components/NavSide";
import { Outlet } from "react-router-dom";

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
            <Outlet />
          
        </Box>
        <Box className="rightBar" w="300px"></Box>
      </Flex>
      <Footer />
    </>
  );
};
