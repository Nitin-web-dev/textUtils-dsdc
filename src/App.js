import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutUs from './components/AboutUs';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light')

  const handleMode = () =>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }
  }
  return (
    <>
    <Navbar mode={mode} handleMode={handleMode}  title="TextUtils" aboutText="About Us" /> 
    <div className="p-5">
      <TextForm mode={mode}/>
      {/* <AboutUs></AboutUs> */}
    </div>
    </>
  );
}

export default App;