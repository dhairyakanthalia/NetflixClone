import React, { useEffect, useState } from 'react'
import './Styles/Header.css'
import { auth } from '../Utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/userSlice'
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

  const user  = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {      
    }).catch((error) => {
      navigate('/error');
    });
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
      <img src= {require('../assets/user_logo.png')} alt='user_logo'/>
      <button onClick = {handleSignOut} className='sign-out'>Sign out</button>
      </div>
      </> )}
    </div>
  )
}

export default Header