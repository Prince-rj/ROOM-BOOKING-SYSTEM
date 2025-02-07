import './CSS/Login.css'
import google from '../assets/google.png'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'


function Login(props) {
  const navigate=useNavigate()
  const [loginEmail,setLoginEmail]=useState('');
  const [loginPassword,setLoginPassword]=useState('');
  const [newUser,setNewUser]=useState(false);
  const loginEmailChangeHandler=(e)=>{
    setLoginEmail(e.target.value)
  }
  const loginPasswordChangeHandler=(e)=>{
    setLoginPassword(e.target.value)
  }
  const submitHandler=async(e)=>{
    e.preventDefault()
    axios.post('http://localhost:2000/loginsubmit', {
      email:loginEmail,
      password:loginPassword
    }).then((res)=>{
      if(res.data.user===null){
        setNewUser(true);
      }
      else{
        setNewUser(false);
        props.setLogin(true);
        props.setName(res.data.user.name);
        props.setEmail(res.data.user.email)
        navigate('/')
      }
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const googleClickHandler=(e)=>{
   navigate('/googleauth')
  }

  const registerClickHandler=()=>{
    navigate('/register')
  }
    return (
      <>
      <form action="" method="post" id="login-form">

        <label htmlFor="email" id='login-email'>Email</label>
        <input onChange={loginEmailChangeHandler} name = "email" type="email" id='login-in-email' placeholder="Enter Your Email"/>
        <label htmlFor="password" id='login-password'>Password</label>
        <input onChange={loginPasswordChangeHandler} name = "password" type="password" id='login-in-password' placeholder="Enter Your password"/>
        {newUser?<span id='login-new-user'>User does not exist! </span>:<span></span>}
        <input onClick={submitHandler} type="submit" id = "login-submit" value="Login"/>

      </form>
      <span className={newUser?'new-user-class':''} id='login-new-user'>New User? <button onClick={registerClickHandler} id='login-new-user-btn'>Register</button></span>
      <span id='login-with'>
        Or you can Login with
        <img onClick={googleClickHandler} id = 'login-with-google' height = '20px' src={google} alt="google" />
        
      </span>
      </>
    )
}

export default Login