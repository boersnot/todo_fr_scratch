import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const [todos,setTodos] =useState([{name:"beffer"}])
 
 return (
    <div className="App">
      {todos[0].name}
    </div>
  );
}

export default App;
