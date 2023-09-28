import React from 'react';
import UserContext from './context.js';
import Card from 'react-bootstrap/Card'; // import the Card comp from react-bootstrap

function Home(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]   = React.useState(0);  // initialize balance to 0
  const ctx = React.useContext(UserContext);

  return (
    <Card
      txtcolor="black"
      header="BadBank Home Page"
      title="WELCOME TO THE BANK"
      text="For all your banking needs. (Not really since there is no security in this bank!)"
      status={status}
      body={show (
        <>
        {/* Display the current balance */}
        Current Balance: ${balance} <br/> <br/> <br/>

        <img src="/images/bank.png" className="img-fluid" alt="Responsive image"/>
        </>
      )}
    />
  );
}

export default Home;