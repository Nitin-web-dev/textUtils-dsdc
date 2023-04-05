
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      <Navbar  title="textutils" about="AboutUs"/>
      <div className='p-5'>
      <TextForm />

      </div>
        
    </div>
  );
}

export default App;
