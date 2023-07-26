import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
function App() {
  const[data, setData] = useState(0);
   
  function getQuote(){
    try{  fetch("https://api.quotable.io/random").then(
      response => response.json()).then(
        (quote) =>{
          setData(quote);
        }
      )
    }
   catch(e){console.log(e);}
  }
 

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      <div>
        <h1 className='Title'>Random Quote Generator</h1>
        <h3 className='Quote'>Quote: {data.content}</h3>
        <h5 className='Author'>Author: {data.author}</h5>
        <h5 classname='Author'>Tag: {data.tags}</h5>
       <button className='Generator' onClick={getQuote}>GetQuote</button>   
      </div>
    </header>
   
    </div>
  );
}

export default App;
