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

    const handlefirstToUpperCase = (e) => {
      let newPera = "";
        let arrStr = text.split(" ");

        for(let i = 0; i < arrStr.length; i++){
       
          let newWord = arrStr[i].split("");
          let rmWord = arrStr[i].slice(1);
          let firstLetter = newWord[0];
          
          // the value of first letter to check if it uppercase or lowercase 
          if(firstLetter == firstLetter.toUpperCase()){
            firstLetter = firstLetter;
          }else{
            firstLetter = firstLetter.toUpperCase();
          }
          // append the word in pera 
          newPera += firstLetter+rmWord+" ";
          
        }
        setText(newPera);
        // console.log(newPera)
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
    <button className='btn btn-primary mx-2' onClick={handlefirstToUpperCase}>Change to firstToUpperCase</button>
    <button className='btn btn-outline-danger mx-2' onClick={handleClearText}>Clear</button>
    {/* the model btn start  */}

    {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Search Words
</button>

{/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Search A word</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <div className="input-group">
              <span className="input-group-text">First and last name</span>
            
              <input type="text" aria-label="Last name" className="form-control"/>
              </div>
              </div>
              <div className="modal-footer">
                
                <button type="button" className="btn btn-primary">Check</button>
              </div>
            </div>
          </div>
        </div>
{/* the model btn end  */}





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
