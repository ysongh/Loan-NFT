import { useContractWrite } from 'wagmi';

import VaultABI from "../artifacts/contracts/Vault.sol/Vault.json";

function Home() {
  const { write } = useContractWrite({
    address: "0xc0B022D8c28fDE375Bf4D032cdD1b94ae507D383",
    abi: VaultABI.abi,
    functionName: 'deposit',
    args: ["0"],
    onError(error) {
      console.log(error);
    },
  });
 
  return (
    <>
      <h1>Test</h1>
      <button disabled={!write} onClick={() => write?.()}>Deposit</button>
    </>
  );
};

export default Home;