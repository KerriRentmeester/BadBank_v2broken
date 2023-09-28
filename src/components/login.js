// in the future, I will need to adjust the initialBalance from being set to zero to being set to the last accountBalance recorded for that user.
// in the future, I may need to adjust the 2nd form at the bottom of this file to account for "logging in" and moving to the "logged in home page."

import React from 'react';
import UserContext from './context.js';
import Card from "react-bootstrap/Card";

function Login(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label){
      // prevent submitting an empty field
      if (!field) {
        setStatus('Error: ' + label + ' cannot be empty');
        setTimeout(() => setStatus(''),3000);  // removes error msg after 3 sec
        return false;
      }
      // Basic email format validation
      const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (label === 'email' && !emailFormat.test(field)) {
        setStatus('Error: ' + label + ' must be proper email format');
        setTimeout(() => setStatus(''),3000);  // removes error msg after 3 sec
        return false;
      }
      // Password validation: PW must be more than 8 characters
      if (label === 'password' && field.length <= 8) {
        setStatus('Error: ' + label + ' must be more than 8 characters');
        setTimeout(() => setStatus(''),3000);  // removes error msg after 3 sec
        return false;
      }
      return true;
  }

    function handleCreateLogin(){
      console.log(email, password);
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;

      // Set an initial balance value when logging in
      const initialBalance = 0;

      ctx.users.push({ email, password, balance: initialBalance });
      setShow(false);
    }

    function clearForm(){
      setEmail('');
      setPassword('');
      setShow(true);
    }

    // Button validation: Disable the submit button until all fields have input
    const isSubmitDisabled = !email || !password;

    return (
      <Card
        bgcolor="info"
        header="Login"
        status={status}
        body={show ? (
          <> {/* empty tags differentiate between the 2 placeholders for the 2 forms */}
          Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>

          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>

          {/* Submit button */}
          <button type="submit" className="btn btn-light" onClick={handleCreateLogin} disabled={isSubmitDisabled}>Login</button>
          </>
        ):(
          <> {/* 2nd form here */}
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>You are logged in!</button>
          </>
        )}
      />
    )
}

export default Login;