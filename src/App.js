import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos';

function App() {

  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  useEffect(() => {
    console.log('useEffect ran ...');
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data));
        setApiResponse(JSON.stringify(data));
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my humble home.
        </p>
        <a
          className="App-link"
          href="https://letmegooglethat.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn something
        </a>
        <Todos />
        <p>
          { apiResponse }
        </p>
      </header>
    </div>
  );
}

export default App;
