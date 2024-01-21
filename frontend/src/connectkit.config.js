import { createConfig } from "wagmi";
import { getDefaultConfig } from "connectkit";
import { sepolia } from "wagmi/chains";

import { ALCHEMY_ID, WALLETCONNECT_PROJECT_ID } from "./keys";

const chains = [sepolia];

export const connectkitconfig = createConfig(
  getDefaultConfig({
    alchemyId: ALCHEMY_ID, // or infuraId
    walletConnectProjectId: WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "Community Vault",

    // Optional
    appDescription: "Community Vault, providing you the opportunity to deposit GHO and earn APY while unlocking exclusive NFT rewards",
    chains,
  }),
);