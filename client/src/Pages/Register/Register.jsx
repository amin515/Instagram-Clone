import React from 'react';
import axios from 'axios';
import { GrFacebook } from "react-icons/gr";
import '../Login/Login.scss';
import { Link } from 'react-router-dom';
import './Register.scss';
import AuthFooter from '../../Components/AuthFooter/AuthFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import swal from 'sweet-alert'

const Register = () => {

  // create a toast message
  const createToast = (msg) => {
    return toast(msg);
  }

  // useState for get input data
  const [input, setInput] = useState({
    name : '',
    email : '',
    username : '',
    password : ''
  });

  // change value for input data
  const handleInput = (e) => {
    setInput((prev) => ({...prev, [e.target.name] : e.target.value}));
  }
  // submit form
 
  const handleSubmit = async(e) => {
   e.preventDefault();
  
   try {
    if(!input.email || !input.name || !input.username || !input.password){
      createToast('All fields are required');
    }else{
      await axios.post('http://localhost:1100/api/user/register', {email : input.email, name : input.name, username : input.username, password : input.password, location : input.location , photo : input.photo})
      .then( res => {
        setInput( {
          name : '',
          email : '',
          username : '',
          password : '',
          photo : '',
          location : ''
        })
      
        swal("Success!","Your account create successfully !","success")
   

      }).catch( err => {
        console.log(err)
      })
    }
    
   } catch (error) {
    console.log(error)
   }
  }

  return (
    <div>
    <div className="login-container">
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    <div className="login-wrapper">
        <a className='login-logo-link' href="#"><img className='login-log-img' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>
        <span className="reg_text">
          Sign up to see photos, and video from your friends
        </span>
        <a href='#' className='login_facebook_reg'><GrFacebook /> Sign up with facebook</a>
        <div className="divider">
          OR
        </div>
        <form action='#' onSubmit={ handleSubmit } className='login-form' >
            <input name='email' value={ input.email } onChange={ handleInput }className='login-input' type="text" placeholder='Mobile number or Email'/>
            <input name='name' value={ input.name } onChange={ handleInput } className='login-input' type="text" placeholder='Full Name'/>
            <input name='username' value={ input.username } onChange={ handleInput } className='login-input' type="text" placeholder='Username'/>
            <input name='password' value={input.password } onChange={ handleInput } className='login-input' type="password" placeholder='password'/>
            <input name='location' value={input.location } onChange={ handleInput } className='login-input' type="text" placeholder='location'/>
            <input name='photo' value={input.photo } onChange={ handleInput } className='login-input' type="text" placeholder='photo'/>
            <p className="form_reg_text">Peaple who use our service may have uploaded your contact information to instgram. <a href="#">Learn More</a></p>
            <p className="form_reg_text">By signing up, you agree to our <a href="#">Terms,</a><a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a></p>
            <button className='login-submit' type='submit'>Submit</button>
        </form>
    </div>
    <div className="signup-wrapper">
      <span className="signup-text">Already have an account?<Link className='signup-link' to="/login">Sign In</Link></span>
    </div>
    <div className="get-app">
      <span className="get_app_text">Get the app.</span>
      <div className="app_logo">
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
      </div>
    </div>
    <AuthFooter />
  </div>
</div>
  )
}

export default Register;