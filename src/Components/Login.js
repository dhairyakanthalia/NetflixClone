import React, { useRef, useState } from 'react'
import Header from './Header'
import './Styles/Login.css'
import { checkValidData } from '../Utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/Firebase';

const Login = () => {
  const [signIn, SetSignIn] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState();


  const handleSignUp = () => {
    SetSignIn(!signIn);
  }

  const handleButton = () =>{
    const errorMessage =  checkValidData(email.current.value, password.current.value);
    setErrorMessage(errorMessage);
    if(errorMessage) return;

    if(!signIn)
    {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user,{
            displayName : name.current.value
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const message = error.message;
          setErrorMessage(message)
        });

    }
    else
    {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const message = error.message;
          setErrorMessage(message);
        });

    }
  }
  return (
    <div>
        <Header/>
        <div className='background-img'>
            <img src={require('../assets/background-image.jpg')} alt='back'/>
        </div>
        <div className='form'>
        <form onSubmit = {(e) =>{e.preventDefault()}}className='signInForm'>
          <h1>{signIn ? "Sign In" : "Sign Up"}</h1>
          {signIn ? "" : <input ref={name} type='text' placeholder='Name' className='name'/>}
          <input ref = {email} type='text' placeholder='Email Address' className='email'/>
          <input ref = {password} type='password' placeholder='Password' className='password'/>
          <p className='error'>{errorMessage}</p>
          <button className='signin' onClick={handleButton}>{signIn ? "Sign In" : "Sign Up"}</button>
          <p className='new' onClick={handleSignUp}> {signIn ? "New to Netflix? Sign Up Now." : "Already Registered? Back to Sign In."}</p>
        </form>
        </div>
    </div>
  )
}

export default Login