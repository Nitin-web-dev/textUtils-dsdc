import React,{useState} from 'react'

export default function TextForm() {

  // destructuring ;
    const [ text, setText] = useState("");

    const handleChange = (e) =>{
      let newText = e.target.value;
      setText(newText);
    }

    const handleUpperCase = (e) => {
      let newTExt = text.toUpperCase();
      setText(newTExt);
    }

    const handleLowerCase = (e) => {
      let newtext = text.toLowerCase();
      setText(newtext);
    
    }

    const handleClearText = (e) => {
      setText("");
    }

  return (
    <div>
  <div className=" mb-3">
    <h1>Enter Your Text Here</h1>
    <textarea 
      value={text}
      onChange={handleChange}
      className="form-control"
      id="exampleFormControlTextarea1"
      rows="3">
      </textarea>
        
  </div>
    <button className='btn btn-primary mx-2'  onClick={handleUpperCase}>Change to UpperCase</button>
    <button className='btn btn-primary mx-2' onClick={handleLowerCase}>Change to lowerCase</button>
    <button className='btn btn-outline-danger mx-2' onClick={handleClearText}>Clear</button>
    <hr /> 
      <div className='p-2'>
        <h1>Your Text Summery</h1>
      </div>

      <p>Your Text Contains : {text.split(" ").length-1} words and {text.length}:  characters</p>
      <hr />
      <p>The average time to read this : {text.split(" ").length * 2.0}</p>
      <hr />
      <h1>preview Text</h1>
      <p>{text}</p>
    </div>
  )
}
