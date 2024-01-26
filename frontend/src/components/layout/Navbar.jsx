import { Link as ReactLink } from 'react-router-dom';
import { Container, Box, Flex, Heading, Text, Spacer, Link } from '@chakra-ui/react';
import { ConnectKitButton } from "connectkit";
import { useContractRead, useAccount } from 'wagmi';
import { formatEther } from 'viem';

import GHOABI from "../../GHO.json";

function Navbar() {
  const { address } = useAccount();

  const { data: GHOBalance } = useContractRead({
    address: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
    abi: GHOABI.abi,
    functionName: 'balanceOf',
    args: [address],
    onError(error) {
      console.log(error);
    },
  });

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
          <Text>{formatEther(GHOBalance || 0)} GHO</Text>
          <ConnectKitButton />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar;