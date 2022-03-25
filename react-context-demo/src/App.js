import React, { useState } from 'react';
import Main from './Main';

import {UserContext} from './UserContext';
function App() {
  let [user,setUser] = useState("GUEST");
  function setLoggedInUser(user){
    setUser(user);
  }
  return (
    <UserContext.Provider value={{user,setLoggedInUser}}>
      <Main />
    </UserContext.Provider>
  );
}

export default App;
