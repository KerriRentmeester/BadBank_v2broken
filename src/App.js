// copied from Yvette, so I probly need to change the names of things
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; // Import BrowserRouter and Routes
import CreateAccount from "./components/createAccount.js";
import Home from "./components/home.js";
import NavBar from './components/navBar.js';
import AllData from "./components/allData.js";
import Deposit from "./components/deposit.js";
import Withdraw from "./components/withdraw.js";
import Login from "./components/login.js";

function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [account, setAccount] = useState([]);

  return (
    <Router> {/* Wrap the entire app with Router */}
      <NavBar />
      
        <Route path="/" element={<Home />} />
        <Route path="AllData" element={<AllData transactions={transactions} account={account} />} />
        <Route path="Deposit" element={<Deposit balance={balance} setBalance={setBalance} Deposit={Deposit} />} />
        <Route path="Withdraw" element={<Withdraw balance={balance} setBalance={setBalance} Withdraw={Withdraw}/>} />
        <Route path="CreateAccount" element={<CreateAccount CreateAccount={CreateAccount}/>} />
        <Route path="Login" element={<Login Login={Login}/>} />
      
    </Router>
  );
}

export default App;