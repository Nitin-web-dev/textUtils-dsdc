import React,{useState} from 'react'

export default function TextForm() {

  // destructuring ;
  // check the textarea 
    const [ text, setText] = useState("");

  //check the search input in word count
    const [search, setSearch] = useState("");
  
  // check the value of word count
    const [value, setValue] = useState("");

  //check the trim 
  const [trimmedValue, setTrimmedValue] = useState('');

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

      let tempArr = text.split(" ");
      let temp = "";
      tempArr.forEach(element => {
        element = element.charAt(0).toUpperCase()+element.substr(1,element.length).toLowerCase();
        temp = temp+" "+element;
        temp = temp.trim();
        
      });
      setText(temp)
    }

    const handleClearText = (e) => {
      setText("");
    }

    const handleWordCount = (e) => {
      
      // alert(search);
      const regex =  new RegExp(search,'gi');
      const newstr = text.match(regex);
      setValue(newstr.length);


    }



    function handleTrimClick() {

      let res = text.replace(/\s/gi,"")
      setText(res);
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
            
              <input 
              value={search || ""}
              onChange={(e)=>setSearch(e.target.value)}
              type="text"
              aria-label="Last name"
              className="form-control"
              />
             
              </div>
              <p>this word is count: {value}</p>
              </div>
            
              <div className="modal-footer">  
                
                <button type="button" className="btn btn-primary" onClick={handleWordCount}>countWord</button>
              </div>
            </div>
          </div>
        </div>
{/* the model btn end  */}


<button className='btn btn-outline-success mx-2' onClick={handleTrimClick}>Trim</button>


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
