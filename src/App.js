import { useState } from 'react';
import './App.css';
import SHA256 from "crypto-js/sha256";

function App() {
  const [value,setvalue] = useState('');
  const [inputtext,setinputtext] = useState("");

  const handlechange = () => {
    const hash = SHA256(value).toString();
    setinputtext(hash)

    setvalue("")
  }
  return (
    <div className="App">
        <h1 className='head'>Hashing Generator</h1>
        <input placeholder='Enter your string' value ={value} onChange={(event) => setvalue(event.target.value)}></input>
        <button onClick={handlechange}>Generate</button>
        {inputtext && <p className='content'>Entered text is : {inputtext}</p>}
        

    </div>
  );
}

export default App;

//npm install crypto-js