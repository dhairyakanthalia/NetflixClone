import React, { useEffect, useState } from 'react'
import './Styles/Header.css'
import { auth } from '../Utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {      
    }).catch((error) => {
      navigate('/error');
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/browse");
        } else {
          navigate("/");
        }
      });

      return () => unsubscribe();
},[])
  
  return (
    <div className='header'>
    <div className='logo'>
        <img src = {require('../assets/netflix_logo.png')} alt = "logo"/>
    </div>    
    <div className='user-logo'>
    <img src= {require('../assets/user_logo.png')} alt='user_logo'/>
    <button onClick = {handleSignOut} className='sign-out'>Sign out</button>
    </div>      
    </div>
  )
}

export default Header