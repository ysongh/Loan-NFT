import { useContractRead, useContractWrite, useAccount } from 'wagmi';
import { formatEther } from 'viem'
import { Container, Button } from '@chakra-ui/react';

import VaultABI from "../artifacts/contracts/Vault.sol/Vault.json";
import GHOABI from "../GHO.json";

function Home() {
  const { address } = useAccount();

  const { data: balance } = useContractRead({
    address: "0xc0B022D8c28fDE375Bf4D032cdD1b94ae507D383",
    abi: VaultABI.abi,
    functionName: 'balanceOf',
    args: [address],
    onError(error) {
      console.log(error);
    },
  });


  const { data: GHOBalance } = useContractRead({
    address: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
    abi: GHOABI.abi,
    functionName: 'balanceOf',
    args: [address],
    onError(error) {
      console.log(error);
    },
  });

  const { write: approve } = useContractWrite({
    address: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
    abi: GHOABI.abi,
    functionName: 'approve',
    args: ["0xc0B022D8c28fDE375Bf4D032cdD1b94ae507D383", "1000000000000000000"],
    onError(error) {
      console.log(error);
    },
  });

  const { write: deposit } = useContractWrite({
    address: "0xc0B022D8c28fDE375Bf4D032cdD1b94ae507D383",
    abi: VaultABI.abi,
    functionName: 'deposit',
    args: ["1000000000000000000"],
    onError(error) {
      console.log(error);
    },
  });

  const { write: withdraw } = useContractWrite({
    address: "0xc0B022D8c28fDE375Bf4D032cdD1b94ae507D383",
    abi: VaultABI.abi,
    functionName: 'withdraw',
    args: ["1000000000000000000"],
    onError(error) {
      console.log(error);
    },
  });
 
  return (
    <Container maxW='1100px'>
      <h1>Test</h1>
      <p>{formatEther(GHOBalance)} GHO</p>
      <p>{formatEther(balance)} Deposit</p>
      <Button disabled={!approve} onClick={() => approve?.()} mb="2">
        Approve
      </Button>
      <br />
      <Button disabled={!deposit} onClick={() => deposit?.()}>
        Deposit
      </Button>
      <br />
      <Button disabled={!withdraw} onClick={() => withdraw?.()}>
        Withdraw
      </Button>
    </Container>
  );
};

export default Home;