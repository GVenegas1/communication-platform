import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import PlayerList from './components/PlayerList.js';
import Message from './components/Message';

//our URL server 
const socket = io('ws://localhost:8080');

//listen to event by the server 
socket.on ('message', text => { 
  const el = document.createElement('li');
  el.innerHTML =text;
  document.querySelector('ul').appendChild(el)

});

//for user to be able to send message 
document.querySelector('button').onclick = () => {
  const text = document.querySelector('input').value;
  socket.emit('message', text)
}



function App() {
  return (
    <div className="App">
      <Navbar />
      <PlayerList />
      <Message />
    </div>
  );
}

export default App;
