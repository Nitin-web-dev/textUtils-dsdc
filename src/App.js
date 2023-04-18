import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import { useState } from 'react';
import Alert from './components/Alert';
import GitHub from './components/GitHub';
import { BrowserRouter,Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light')
  //this is for alert massage
  const [alert, setAlert] = useState(null);

 const showAlert = (type, message) => {
  setAlert({type:type,message:message})

  setTimeout(() => setAlert(null),1500);
 };

  const handleMode = () =>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('success',"light mode is enabled");

    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('success',"dark mode is enabled");

    }
  }
  return (
    <BrowserRouter>
    <>
        <Navbar mode={mode} handleMode={handleMode}  title="TextUtils" aboutText="About Us" /> 
        <Alert  alert={alert}/>
          <div className="p-5">
            <Routes>
          
                <Route path='/' element={<TextForm mode={mode} showAlert={showAlert}/>}/>
                <Route path='/about' element={<AboutUs />}/>
                <Route path='/Github' element={<GitHub />}/>
           </Routes>
          </div>
      </>
    </BrowserRouter>
   
  );
}

export default App;