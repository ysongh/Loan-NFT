import { Link as ReactLink } from 'react-router-dom';
import { Container, Box, Flex, Heading, Spacer, Link, Button } from '@chakra-ui/react';
import { ConnectKitButton } from "connectkit";

function Navbar() {
  return (
    <Box p={2}>
      <Container maxW='1100px'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box mr="4">
            <Link as={ReactLink} to="/">
              <Heading color="green" mt="3" mb="5">Community Vault</Heading>
            </Link>
          </Box>
          <Link as={ReactLink} to="/">Home</Link>
          <Link as={ReactLink} to="/mintnft">Mint NFT</Link>
          <Spacer />
          <ConnectKitButton />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar;