import { useState } from "react";
import React from 'react';
import UserContext from './context.js';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Deposit(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [balance, setBalance]   = React.useState(0);  // initialize balance to zero
    const [deposit, setDeposit]   = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        // Prevent depositing a negative number
        if (parseFloat(field) <= 0) {
          setStatus('Error: ' + label + ' must be a positive number');
          setTimeout(() => setStatus(''), 3000);
          return false;
        }
        // Prevent input of a non-integer
        if (isNaN(field)) {
          setStatus('Error: ' + label + ' must be a number');
          setTimeout(() => setStatus(''), 3000);
          return false;
        }

        return true;
    }

    function handleDeposit(){
      // console.log(deposit);
      if (!validate(deposit, 'deposit')) return;

      // update balance by adding the deposit amount
      const updatedBalance = parseFloat(balance) + parseFloat(deposit);
      setBalance(updatedBalance);

      // add a new transaction & log the deposit/update the balance
      ctx.users.push({ deposit, balance: updatedBalance });
      setShow(false);
    }

    function clearForm(){
      setDeposit('');
      setShow(true);
    }

    // Button validation: Disable the deposit button until the deposit field has an input
    const isSubmitDisabled = !deposit;

    return (
      <Card
        bgcolor="success"
        header="DEPOSIT"
        status={status}
        body={show ? (
          <>
          {/* Display the current balance */}
          Current Balance: ${balance} <br/> <br/> <br/>

          {/* Deposit input field */}
          Deposit<br/>
          <input type="text" inputmode="numeric" pattern="[0-9]*" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={(e) => setDeposit(e.currentTarget.value)} /><br />  {/* value={props.deposit} onChange={e => props.setDeposit(e.currentTarget.value)} */}

          {/* Submit button */}
          <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={isSubmitDisabled}>Deposit</button>
          </>
        ):(
          <>
          {/*Display the current accountBalance */}
          Current Balance: ${balance} <br /> <br />
          <h5>Success!</h5>  <br />
          <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
          </>
        )}
      />
    );
}

export default Deposit;