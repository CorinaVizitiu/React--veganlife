import React,{useState} from 'react';

const Register = (props) => {
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[nom,setNom]=useState('');
    const[prenom,setPrenom]=useState('');
    const handleSubmit=(e)=>{
        e.preventeDefault();
        console.log(email);
    }
    return (
        <div className='auth-form-container'>
      
        <h2>Register</h2>
    <form className='login-form' onSubmit={handleSubmit}>
    <label htmlFor='nom'>Name</label>
    <input value={nom} onChange={(e)=>setNom(e.target.value)} type='nom' placeholder='Nom' name='nom'/>   
    <label htmlFor='prenom'>First name</label>
    <input value={prenom} onChange={(e)=>setPrenom(e.target.value)} type='prenom' placeholder='Prenom' name='preenom'/>   
    <label htmlFor='email'>Email</label>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='your email' name='email'/>
    <label htmlFor='password'>Password</label>
    <input value={pass} onChange={(e)=>setPass(e.target.value)} type='password' placeholder='*******' name='password'/>
    <button type='submit'>Login</button>
    </form>
    <button className='link-btn' onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here . </button>
    </div>
    )
};

export default Register;