import React, {useState} from 'react';
import './App.css';
function App() {
  const [Saldo, setSaldo]= useState(0)
  const [Placar, setPlacar]= useState(0)
  const [Partidas, setPartidas]= useState(0)
  const [Aposta, setAposta]= useState(10)
  const [Depositos, setDepositos]= useState(0)
  const [Ganhos, setGanhos]= useState(0)
  
  const [Lot1, setLot1]= useState(0)
  const [Lot2, setLot2]= useState(0)
  const [Lot3, setLot3]= useState(0)
  const [Lot4, setLot4]= useState(0)
  const [Lot5, setLot5]= useState(0)
  const [Lot6, setLot6]= useState(0)
  const [Lot7, setLot7]= useState(0)
  const [Lot8, setLot8]= useState(0)
  const [Lot9, setLot9]= useState(0)
  const [Lot10, setLot10]= useState(0)
  const [mensagem, setMensagem]= useState('Ainda nao temos um ganhador')

  function addBalance(){
    var deposit_value = document.getElementById("deposit").value;
    setSaldo(parseInt(Saldo) + parseInt(deposit_value))
    setDepositos(parseInt(Depositos) + parseInt(deposit_value))
    console.log('saldo eh do tipo')
    console.log(typeof(Saldo))
    console.log('valor do saldo eh' + Saldo)
    console.log('deposit value eh do tipo')
    console.log(typeof(deposit_value))
    console.log('valor do deposi value eh' +deposit_value)
    
  }
function aposta (){
  var apostar = document.getElementById("apostar").value;
  if (apostar>0){

    setAposta(parseInt(apostar))
  }
 
  
}
// Optei por setInterval 500 para nao recalcular com uma frequencia alta demais mas poderia se qualquer outro valor 
setInterval(aposta, 500)

  function removeBalance(){
    var deposit_value = document.getElementById("deposit").value;
    setSaldo(parseInt(Saldo) - parseInt(Aposta))
    console.log('saldo eh do tipo')
    console.log(typeof(Saldo))
    console.log('valor do saldo eh' +Saldo)
   
    
  }
  
  function ganhou()
  {
    setSaldo(parseInt(Saldo) + 10*(parseInt(Aposta)))
    setGanhos(parseInt(Ganhos) + 10*(parseInt(Aposta)))
    console.log('Voce Ganhou!!')
    setMensagem('Voce ganhou!!!!!!!!')
    setPlacar(Placar + 1)
  }
function girar(){
  setPartidas(Partidas + 1)
  aposta()
  removeBalance()
  const value = Math.floor(Math.random() * 101);
  console.log(value);
  setLot1(value)
  const value2 = Math.floor(Math.random() * 101);
  console.log(value2);
  setLot2(value2)
  const value3 = Math.floor(Math.random() * 101);
  console.log(value3);
  setLot3(value3)
  const value4 = Math.floor(Math.random() * 101);
  console.log(value4);
  setLot4(value4)
  const value5 = Math.floor(Math.random() * 101);
  console.log(value5);
  setLot5(value5)
  const value6 = Math.floor(Math.random() * 101);
  console.log(value6);
  setLot6(value6)
  const value7 = Math.floor(Math.random() * 101);
  console.log(value7);
  setLot7(value7)
  const value8 = Math.floor(Math.random() * 101);
  console.log(value8);
  setLot8(value8)
  const value9 = Math.floor(Math.random() * 101);
  console.log(value9);
  setLot9(value9)
  const value10 = Math.floor(Math.random() * 101);
  console.log(value10);
  setLot10(value10)
  var input_value = parseInt(document.getElementById("input").value);
  console.log(input_value)
  if (input_value != value ) {
    setMensagem('Tente novamente!')
  }
  if (input_value == value | input_value == value2 | input_value == value3 | input_value == value4 | input_value == value5 | input_value == value6 | input_value == value7 | input_value == value8 | input_value == value9 | input_value == value10) {
   
   ganhou()
}}

  return (
    <div className="App">
      <div className="container" >

    <div className="lot1">{Lot1}</div><div className="lot2">{Lot2}</div><div className="lot3">{Lot3}</div>
    <div className="lot4">{Lot4}</div><div className="lot5">{Lot5}</div><div className="lot6">{Lot6}</div>
    <div className="lot7">{Lot7}</div><div className="lot8">{Lot8}</div>
    <div className="lot9">{Lot9}</div><div className="lot10">{Lot10}</div>
      </div>
      <div className="container2">
        <div className="jogo">

    <div>{mensagem}</div>
    <button className="btn" onClick = {girar}> Jogue</button>
        </div>
        <div>

        <div className="aposta">Escolha o numero</div>
        <input id= "input" placeholder="Escolha entre 1 e 100"></input>
        <div className="aposta">A aposta sera de ${Aposta},00</div>
        <input id= "apostar" placeholder="10"></input>
        </div>
      <div className = "money">
    <div>Seu saldo e ${Saldo},00 </div>
        <input id= "deposit" placeholder="Faca seu primeiro deposito" />
        
        <button onClick = {addBalance}>Deposito</button>
      </div>
      </div>
      <div className="placar" > Partidas: {Partidas}</div>
      <div className="placar" > Vitorias: {Placar}</div>
      <div className="saldos" > Depositos: ${Depositos},00</div>
      <div className="saldos" > Ganhos: ${Ganhos},00</div>
      <div className="saldos" > Usuario: Jefftm</div>
    </div>
    
  );
}

export default App;
