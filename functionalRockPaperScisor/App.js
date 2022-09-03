import React, {useState} from 'react';
import './App.css';


function App() {
  const [count, setCount]= useState(0)
  const [theme, setTheme] = useState('No choice yet')
  const [countTwo, setCountTow]= useState(0)
  const [themeTwo, setThemeTwo] = useState('No choice yet')
  function incrementCount(){
    setCount(count + 1)
  }
  function incrementCountTwo(){
    setCountTow(countTwo + 1)
  }
  function rock(){
    setTheme(' Rock')
  }
  function Paper(){
    setTheme(' Paper')
  }
  function Scisor(){
    setTheme(' Scisor')
  }
  
  function rockTwo(){
    setThemeTwo(' Rock')
  }
  function paperTwo(){
    setThemeTwo(' Paper')
  }
  function SisorTwo(){
    setThemeTwo(' Scisor')
  }
  function ClickRock() {
          
    window.alert('Rock')
    let value = Math.random();
    window.alert(value)
    rock()
   
    if (value < 0.3)
    {
       window.alert('Oponent chose Rock, its a Tie!')
       rockTwo()
       
    }
    if (value <0.7 && value > 0.3)
    {
       window.alert('Oponent chose Paper, you Lose!')
       incrementCountTwo()
       paperTwo()
       
    }
    if (value > 0.7)
    {
       window.alert('Oponent chose Scisor, you Win!')
       incrementCount()
       SisorTwo()
    }
    
 }
 function ClickPaper() {
          
  window.alert('Paper')
  let value = Math.random();
  window.alert(value)
  
  Paper()
  if (value < 0.3)
   {
      window.alert('Oponent chose Rock, you Win!')
      incrementCount()
      rockTwo()
   }
   if (value <0.7 && value > 0.3)
   {
      window.alert('Oponent chose Paper, its a Tie')
      paperTwo()
   }
   if (value > 0.7)
   {
      window.alert('Oponent chose Scisor, you Lose!')
      incrementCountTwo()
      SisorTwo()
   }
   }
   function ClickScisor() {
          
    window.alert('Scisor')
    let value = Math.random();
    window.alert(value);
    Scisor()
    

    
    if (value < 0.3)
     {
        window.alert('Oponent chose Rock, you Lose!')
        rockTwo()
        incrementCountTwo()
     }
     if (value <0.7 && value > 0.3)
     {
        window.alert('Oponent chose Paper, you Win!')
        incrementCount()
        paperTwo()
     }
     if (value > 0.7)
     {
        window.alert('Oponent chose Scisor, its a Tie')
        SisorTwo()
     }
     }
  return (
    <div className="App">
    <div className="playerCount">{count}</div>
       <div className="playerOnes">{theme}</div>
       <div className="playerTwoCount">{countTwo}</div>
       <div className="playerTwos">{themeTwo}</div>
      
     <button className= "Rock"  onClick= {ClickRock} >Rock</button>
     <button className= "Paper" onClick= {ClickPaper}>Paper</button>
     <button className= "Scisor" onClick= {ClickScisor} >Scisor</button>
      
    </div>
  );
}

export default App;
