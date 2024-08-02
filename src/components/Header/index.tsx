import React from 'react';
import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>My Chakra App</Box>
        <IconButton
          size="md"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
        />
      </Flex>
    </Box>
  );
};

export default Header;
