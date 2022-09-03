import React, {useState} from 'react';
import './App.css';

function App() {
 const [count, setCount]= useState(4)
  function decrementCount(){
    setCount(count - 1)
  }
  function incrementCount(){
    setCount(count + 1)
  }

  return (
    <div className="App">
      <button className="button" onClick={decrementCount}>-</button>
    <span className="span">{count}</span>
      <button className="button" onClick={incrementCount}>+</button>
      
    </div>
  );
}

export default App;
