import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Mainnet, DAppProvider, Config, Sepolia } from "@usedapp/core";
// import { MetamaskConnect } from './components/MetamaskConnect'
import store from "./state";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    // [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [Sepolia.chainId]: "https://rpc.sepolia.orgm",
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DAppProvider config={config}>
          <App />
        </DAppProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
