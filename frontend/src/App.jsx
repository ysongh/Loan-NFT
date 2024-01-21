import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton } from "connectkit";

import { connectkitconfig } from './connectkit.config';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import MintNFT from './pages/MintNFT';

function App() {
  return (
    <ChakraProvider>
      <WagmiConfig config={connectkitconfig}>
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
              path="/mintnft"
              element={<MintNFT />} />
            <Route
              path="/"
              element={<Home />} />
          </Routes>
        </HashRouter>
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
};

export default App;