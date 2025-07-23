import React, { useEffect, useState } from 'react'
import './Styles/Header.css'
import { auth } from '../Utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {      
    }).catch((error) => {
      navigate('/error');
    });
  }
  
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