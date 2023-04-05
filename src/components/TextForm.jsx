import React,{useState} from 'react'

export default function TextForm() {

  // destructuring ;
    const [ text, setText] = useState("Enter YOU text here");

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

    </div>
  )
}
