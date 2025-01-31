// React
import React from "react";
import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client';
import App from "./App";

// NEAR
import { LockCalendar } from "./near-interface";
import { Wallet } from "./near-wallet";

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME });

// Abstract the logic of interacting with the contract to simplify your flow
const lockCalendar = new LockCalendar({
  contractId: process.env.CONTRACT_NAME,
  walletToUse: wallet,
});

// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp();
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <App isSignedIn={isSignedIn} lockCalendar={lockCalendar} wallet={wallet} />
  );
};
