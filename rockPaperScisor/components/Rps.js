import React, { Component, value , playerOne, playerTwo} from 'react'

export class Rps extends Component {
    render() {
        
      function ClickRock() {
          
             window.alert('Rock')
             let value = Math.random();
             window.alert(value)
             const playerOne = 'Rock';
             window.alert(playerOne);
            
             if (value < 0.3)
             {
                window.alert('Oponent chose Rock, its a Tie!')
             }
             if (value <0.7 && value > 0.3)
             {
                window.alert('Oponent chose Paper, you Lose!')
             }
             if (value > 0.7)
             {
                window.alert('Oponent chose Scisor, you Win!')
             }
          }
          function ClickPaper() {
          
            window.alert('Paper')
            let value = Math.random();
            window.alert(value)
            var playerOne = 'Paper';
            window.alert(playerOne);
            if (value < 0.3)
             {
                window.alert('Oponent chose Rock, you Win!')
             }
             if (value <0.7 && value > 0.3)
             {
                window.alert('Oponent chose Paper, its a Tie')
             }
             if (value > 0.7)
             {
                window.alert('Oponent chose Scisor, you Lose!')
             }
         }

         function ClickScisor() {
          
            window.alert('Scisor')
            let value = Math.random();
            window.alert(value);
            var playerOne = 'Scisor';
            window.alert(playerOne);
            if (value < 0.3)
             {
                window.alert('Oponent chose Rock, you Lose!')
             }
             if (value <0.7 && value > 0.3)
             {
                window.alert('Oponent chose Paper, you Win!')
             }
             if (value > 0.7)
             {
                window.alert('Oponent chose Scisor, its a Tie')
             }
         }
    return (<div className="Rps" >
        <div className= "playerOnes"> Player one {playerOne}</div><div className= "playerTwos"> Player two {playerTwo}</div>
      <button className= "Rock"  onClick= {ClickRock} >Rock</button>
      <button className= "Paper" onClick= {ClickPaper}>Paper</button>
      <button className= "Scisor"  onClick= {ClickScisor} >Scisor</button>
    </div>
    )
  }
}

export default Rps
