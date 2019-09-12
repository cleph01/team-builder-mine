import React, { useState } from 'react'; //Import useState  
import Form from './components/Form';
import MemberList from './components/MemberList';

import logo from './logo.svg';
import './App.css';

function App() {

  //Hold Member Objects in State
  const [members, setMember] = useState([]);


  return (
    <div className="App">
      
      <Form members={members} setMember={setMember} />

      {
        members.length == 0 ? <h2>No Members</h2> : <MemberList members={members} />
      }
      

    </div>
  );
}

export default App;
