import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

import { ALCHEMY_ID, WALLETCONNECT_PROJECT_ID } from "./keys";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: ALCHEMY_ID, // or infuraId
    walletConnectProjectId: WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);


function App() {

  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <h1>Loan NFT</h1>
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App;