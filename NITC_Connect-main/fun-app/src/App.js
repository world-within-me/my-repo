import './App.css';
import React from 'react';
import Profile from './components/Profile'
// import Profile from './components/Profile';
import Login from './components/Login';
import PostCreation from './components/PostCreation';
function App() {

  return (
    <div className="App" >
      <Login/>
      {/* <Profile/> */}
      {/* <PostCreation/> */}
    </div>
  );
}

export default App;
