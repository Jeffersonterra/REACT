import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Firsthello from './components/Firsthello'
import Hello from './components/Hello'
import Message from './components/Message'
import Timer from './components/Timer'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <Timer/>
     {/*
       <EventBind/>
      <FunctionClick />
      <ClassClick/>
      <Counter/>
      <Hello/>
      <Greet/>
      <Firsthello/>
  */}
    </div>
  );
}

export default App;
