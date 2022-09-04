import React, {useState, useEffect}  from 'react';
import './App.css';

function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])
  return (
    <div>

    <div className="App">
      <button onClick={() => setResourceType('posts')}>Post</button>
      <button onClick={() => setResourceType('users')}>User</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(items=> {
      return <pre>{JSON.stringify(items)}</pre>
    })}
    </div>
  );
}

export default App;
