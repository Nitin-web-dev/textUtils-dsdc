import React, { useState } from "react";

// RULE
export default function TextForm(props) {
  const [text, setText] = useState("");
  const [searchValue, setsearchValue] = useState("");
  
  // check the value of word count
  const [value, setValue] = useState(0);

  const handleOnChange = (event) => {
    let newText = event.target.value;
    // text = newText; this is wrong method to update
    setText(newText); // this is right way to update
  };


  // contributed by rahul
  const handlefirstToUpperCase = (e) => {
    // let tempArr = text.split(" ");
    // let temp = "";
    // tempArr.forEach(element => {
    //   element = element.charAt(0).toUpperCase()+element.substr(1,element.length).toLowerCase();
    //   temp = temp+" "+element;
    //   temp = temp.trim();
    // });
    // setText(temp)
      
    //+++++++ New code written by Nitin
        let NewArr = text.split(" ");
        let txtarr = [];
          for( let i of NewArr){
            let element = i.charAt(0).toUpperCase().concat(i.slice(1).toLowerCase());
            txtarr.push(element);
          }
        let newtxt = txtarr.join(" ");
        setText(newtxt)



        /// condition for alert 
      if(text.length !== 0){
          props.showAlert('success','only first letter to uppecase');
      }else{
          props.showAlert('danger','plz fill the input');

      }

  }




  const handleOnUpperCase = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
        if(text.length !== 0){
          props.showAlert('success','all letter to uppecase');
      }else{
          props.showAlert('danger','plz fill the input');

      }
   

  };

  const handleOnLowerCase = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
      if(text.length !== 0){
        props.showAlert('success','all letter to lowercase');
    }else{
        props.showAlert('danger','plz fill the input');

    }


   

  };
  const handleOnClearText = (event) => {
    setText("");
        if(text.length !== 0){
          props.showAlert('success','clear the text');
      }else{
          props.showAlert('danger','plz fill the input');

      }

  };
  const handleWordCount = (e) => {
    const regex =  new RegExp(searchValue,'gi');
    const newstr = text.match(regex);
    setValue(newstr.length > 0 ? newstr.length : 0);
  }   


  
  return (
    <div style={{backgroundColor:props.mode === 'dark'?'black':'white', color:props.mode === 'dark'?'white':'black'}}>
      <div className="mb-3">
        <h1>Enter Your Text Here</h1>
        <textarea
          value={text}
          className="form-control"
          onChange={handleOnChange}
          id="text"
          rows="8"
        ></textarea>
      </div>
      <button
        onClick={handleOnUpperCase}
        className="btn btn-outline-primary mx-2"
      >
        Convert to Upper Case
      </button>

      <button
        onClick={handleOnLowerCase}
        className="btn btn-outline-primary mx-2"
      >
        Convert to Lowers Case
      </button>

      <button
        onClick={handleOnClearText}
        className="btn btn-outline-danger mx-2"
      >
        Clear text
      </button>
      <button className='btn btn-outline-primary mx-2' onClick={handlefirstToUpperCase}>Capitalize</button>

      <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Search A Word
</button>

{/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog"  >
            <div className="modal-content" style={{backgroundColor:props.mode === 'dark'?'black':'white', color:props.mode === 'dark'?'white':'black'}}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Search a word</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <div className="input-group">
             
            
              <input 
              value={searchValue || ""}
              onChange={(e)=>setsearchValue(e.target.value)}
              type="text"
              aria-label="Last name"
              className="form-control"
              />
             
              </div>
              <p>Word Count: {value}</p>
              </div>
            
              <div className="modal-footer">  
                
                <button type="button" className="btn btn-primary" onClick={handleWordCount}>search</button>
              </div>
            </div>
          </div>
        </div>
{/* the model btn end  */}

      <div className="p-2">
        <h2>Your Text Summary</h2>
      </div>

      <p>Your text contains {text.split(" ").length -1}  words and {text.length} characters</p>

      <p>Average speed to read this text is {text.split(" ").length * 0.008} minutes</p>

      <h3>Preview text</h3>
      <p>{text}</p>


    </div>
  );
}