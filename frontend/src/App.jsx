import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import { sepolia } from "wagmi/chains";

import { ALCHEMY_ID, WALLETCONNECT_PROJECT_ID } from "./keys";

import Navbar from './components/layout/Navbar';

const chains = [sepolia];

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

    chains,
  }),
);


function App() {

  return (
    <ChakraProvider>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route
              path="/test"
              element={
                <>
                  <h1>Test</h1>
                </>} />
            <Route
              path="/"
              element={
                <>
                  <h1>Loan NFT</h1>
                  <ConnectKitButton />
                </>} />
          </Routes>
        </HashRouter>
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
};

export default App;