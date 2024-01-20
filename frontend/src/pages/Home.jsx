import { useContractWrite, usePrepareContractWrite } from 'wagmi';

import VaultABI from "../artifacts/contracts/Vault.sol/Vault.json";

function Home() {
  const { config } = usePrepareContractWrite({
    addressOrName: "0xc0B022D8c28fDE375Bf4D032cdD1b94ae507D383",
    contractInterface: VaultABI,
    functionName: 'deposit',
    args: [BigInt("10000000000")],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  console.log(data, isSuccess)
 

  return (
    <>
      <h1>Test</h1>
      <button disabled={!write} onClick={() => write?.()}>Deposit</button>
    </>
  );
};

export default Home;