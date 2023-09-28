import React from 'react';
import UserContext from './context.js';
import Card from "react-bootstrap/Card";

function CreateAccount(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
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

    function handleCreateAccount(){
      console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;

      // Set an initial balance value for a new account
      const initialBalance = 0;

      ctx.users.push({ name, email, password, balance: initialBalance });
      setShow(false);
    }

    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }

    // Button validation: Disable the submit button until all fields have input
    const isSubmitDisabled = !name || !email || !password;

    return (
      <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={show ? (
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>

                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>

                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />

                {/* Submit button */}
                <button type="submit" className="btn btn-light" onClick={handleCreateAccount} disabled={isSubmitDisabled}>Create Account</button>
                </>
              ):(
                <> {/* 2nd form here */}
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
              )}
      />
    )
  }

export default CreateAccount;