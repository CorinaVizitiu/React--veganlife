import React,{useState} from 'react';
import './myaccount.css';
import Menu from './Menu';
import Login from './Login';
import Register from './Register';
function App() {
  const [currentForm,setCurrentForm]=useState('login');
  const toggleForm=(formName)=>{
    setCurrentForm(formName);
  }
  return (
<div className='Ap'>
<Menu />
  {
    currentForm==='login' ? <Login onFormSwitch={toggleForm}/> : <Register/>
  }

</div>

   
   
  );
}

export default App;
