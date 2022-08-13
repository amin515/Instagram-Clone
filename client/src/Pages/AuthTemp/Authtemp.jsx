
import React from 'react'
import { GrFacebook } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import AuthFooter from '../../Components/AuthFooter/AuthFooter';

import './Authtemp.scss'
const Authtemp = () => {
  return (
    <div>
      <div className="login-container">
        <div className="auth-container">
            <div className="auth-left">
                <img src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" alt="" />
            <div className="auth_carousel">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://i.ibb.co/gynTh2L/Screenshot-1.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="https://i.ibb.co/hdHGRDS/Screenshot-2.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="https://i.ibb.co/Kxz88K2/Screenshot-3.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="https://i.ibb.co/QQ3kyF8/Screenshot-4.png" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                       
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
             </div>
            </div>
            </div>
            <div className="auth-right">
            <div className="login-wrapper">
            <a className='login-logo-link' href="#"><img className='login-log-img' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>
            <form action="#" className='login-form'>
                <input className='login-input' type="text" placeholder='username phone or email'/>
                <input className='login-input' type="text" placeholder='password'/>
                <button className='login-submit'>Log in</button>
            </form>
            <div className="divider">
              OR
            </div>
            <a href='#' className='login_facebook'><GrFacebook />Log in with facebook</a>
            <a href='#' className='login_password'>Forgot Password ?</a>
        </div>
        <div className="signup-wrapper">
          <span className="signup-text">Don't have an account?<Link className='signup-link' to="/register">Sign up</Link></span>
        </div>
        <div className="get-app">
          <span className="get_app_text">Get the app.</span>
          <div className="app_logo">
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
          </div>
        </div>
            </div>
        </div>
        <AuthFooter />
        </div>
    </div>
  )
}

export default Authtemp;
