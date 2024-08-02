import { Box, Flex } from "@chakra-ui/react"

export interface LinkItemProps {
    name: string
  }

export const NavItem = ({ icon, children, ...rest }: any) => {
    return (
      <Box
        as="a"
        href="#"
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          role="group"
          cursor="pointer"
          bg='gray.700'
          color='white'
          style={{marginLeft:"0px"}}
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}>
          {children}
        </Flex>
      </Box>
    )
  }
