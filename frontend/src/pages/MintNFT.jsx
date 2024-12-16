import { useAccount } from 'wagmi';
import { Container, Button } from '@chakra-ui/react';

function MintNFT() {
  const { address } = useAccount();
 
  return (
    <Container maxW='1100px' mt='10'>
      <h1>Mint NFT</h1>
      <p>{address}</p>
      <Button mb="2">
        Mint
      </Button>
    </Container>
  );
};

export default MintNFT;