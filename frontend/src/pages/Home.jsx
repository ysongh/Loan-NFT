import { useState } from 'react';
import { useContractRead, useContractWrite, useAccount } from 'wagmi';
import { formatEther } from 'viem'
import { Center, Box, FormControl, FormLabel, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Button, Text, Heading } from '@chakra-ui/react';

import VaultABI from "../artifacts/contracts/Vault.sol/Vault.json";
import GHOABI from "../GHO.json";
import { VAULT_ADDRESS, GHO_ADDRESS } from '../keys';

function Home() {
  const { address } = useAccount();

  const [selectedTab, setSelectedTab] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const { data: balance } = useContractRead({
    address: VAULT_ADDRESS,
    abi: VaultABI.abi,
    functionName: 'balanceOf',
    args: [address],
    onError(error) {
      console.log(error);
    },
  });


  const { data: GHOBalance } = useContractRead({
    address: GHO_ADDRESS,
    abi: GHOABI.abi,
    functionName: 'balanceOf',
    args: [address],
    onError(error) {
      console.log(error);
    },
  });

  const { data: GHOAllowance } = useContractRead({
    address: GHO_ADDRESS,
    abi: GHOABI.abi,
    functionName: 'allowance',
    args: [address, VAULT_ADDRESS],
    onError(error) {
      console.log(error);
    },
  });

  const { write: approve } = useContractWrite({
    address: GHO_ADDRESS,
    abi: GHOABI.abi,
    functionName: 'approve',
    args: [VAULT_ADDRESS, amount],
    onError(error) {
      console.log(error);
    },
  });

  const { write: deposit } = useContractWrite({
    address: VAULT_ADDRESS,
    abi: VaultABI.abi,
    functionName: 'deposit',
    args: [GHOAllowance],
    onError(error) {
      console.log(error);
    },
  });

  const { write: withdraw } = useContractWrite({
    address: VAULT_ADDRESS,
    abi: VaultABI.abi,
    functionName: 'withdraw',
    args: [amount],
    onError(error) {
      console.log(error);
    },
  });
 
  return (
    <Center mt="10">
      <Box p={6} boxShadow="md" borderRadius="md" w={500}>
        <Tabs onChange={handleTabChange} defaultIndex={selectedTab}>
          <TabList>
            <Tab>Deposit</Tab>
            <Tab>Withdraw</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Heading>{formatEther(GHOBalance || 0)} GHO</Heading>
              <FormControl id="amount" isRequired mb="3">
                <FormLabel>Amount</FormLabel>
                <Input type="number" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.target.value)}/>
              </FormControl>
              <Text my="2">
                Allowance: {formatEther(GHOAllowance || 0)} GHO
              </Text>
              {GHOAllowance <= 0
                ? <Button disabled={!approve} onClick={() => approve?.()} mt="2" mb="2">
                    Approve
                  </Button>
                : <Button disabled={!deposit} onClick={() => deposit?.()}>
                    Deposit
                  </Button>
              }
            </TabPanel>

            <TabPanel>
              <Heading>{formatEther(balance || 0)} Deposit</Heading>
              <FormControl id="amount" isRequired>
                <FormLabel>Amount</FormLabel>
                <Input type="number" placeholder="Enter amount" />
              </FormControl>
              <Button disabled={!withdraw} onClick={() => withdraw?.()} mt="2">
                Withdraw
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Center>
  );
};

export default Home;