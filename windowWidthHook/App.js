import React, {useState, useEffect}  from 'react';
import './App.css';

function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)
 
  return (
    <div>{windowWidth}</div>
  );
}

export default App;
