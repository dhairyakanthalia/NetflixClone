import React, { useEffect, useState } from 'react'
import './Styles/Header.css'
import { auth } from '../Utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/userSlice'
import { setGpt } from '../Utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const gpt = useSelector((store) => (store.gpt));

  const user  = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {      
    }).catch((error) => {
      navigate('/error');
    });
  }

  const handleGpt = () => {    
    dispatch(setGpt(!gpt));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({uid : uid, email : email, displayName : displayName}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
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
    { user && (
      <>
      <div className='user-logo'>
      <button onClick={ handleGpt }  className='gptButton'>GPT Search</button>
      <img src= {require('../assets/user_logo.png')} alt='user_logo'/>
      <button onClick = {handleSignOut} className='sign-out'>Sign out</button>
      </div>
      </> )}
    </div>
  )
}

export default Header