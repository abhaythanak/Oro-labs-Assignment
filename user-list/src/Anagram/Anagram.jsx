import { useState } from "react";
import './Anagram.css';

export default function Anagram() {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [result, setResult] = useState('');

  const areAnagrams = (str1, str2) => {
    const cleanStr1 = str1.toLowerCase();
    const cleanStr2 = str2.toLowerCase();
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
  };

  const handleCheckAnagrams = () => {
    if (string1 === '' || string2 === '') {
      setResult('Input cannot be empty.');
    }else if (areAnagrams(string1, string2)) {
      setResult('These strings are anagrams!');
    } else {
      setResult('These strings are not anagrams.');
    }
  };

  const handleClearInputs = () => {
    setString1('');
    setString2('');
    setResult('');
  };
  return (
    <>
      <div className="Anagram-container">
          <div className="Anagram-model">
            <div className="header">
            <h1>Anagram Checker</h1>
            </div>
            <div className="Anagram-group">
              <label>String 1</label>
              <input type="text" value={string1} onChange={(e) => setString1(e.target.value)} />
            </div>
            <div className="Anagram-group">
              <label>String 2</label>
              <input type="text" value={string2} onChange={(e) => setString2(e.target.value)} />
            </div>
              <div className="Anagram-btn">
                <button className="btnCheck" onClick={handleCheckAnagrams}>Check</button>
                <button className="btnClear" onClick={handleClearInputs}>Clear</button>
              </div> 
              <div className="result"><h1>{result}</h1></div>  
          </div>
        </div>
    </>
  )
}
