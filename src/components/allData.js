// needs to be fixed yet
import React from 'react';
import UserContext from './context.js';

function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <>
      <h5>All Data in Store</h5>
      {JSON.stringify(ctx)}<br/>
      </>
    );
  }

  export default AllData;