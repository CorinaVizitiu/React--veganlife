import React,{useState}from 'react';

const Login = (props) => {
    const[nom,setNom]=useState('');
    const[prenom,setPrenom]=useState('');
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className='auth-form-container'>
           
        <h2>Login</h2>
    <form className='login-form' onSubmit={handleSubmit}>
    <label htmlFor='nom'>Name</label>
    <input value={nom} onChange={(e)=>setNom(e.target.value)} type='nom' placeholder='Nom' name='nom'/>   
    <label htmlFor='prenom'>First Name</label>
    <input value={prenom} onChange={(e)=>setPrenom(e.target.value)} type='prenom' placeholder='Prenom' name='preenom'/>   
    <label htmlFor='email'>Email</label>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='your email' name='email'/>
    <label htmlFor='password'>Password</label>
    <input value={pass} onChange={(e)=>setPass(e.target.value)} type='password' placeholder='*******' name='password'/>
    <button type='submit'>Login</button>
    </form>
    <button className='link-btn' onClick={() =>props.onFormSwitch('register')}>Don't have an account? Register here . </button>
    </div>
    )
};

export default Login;