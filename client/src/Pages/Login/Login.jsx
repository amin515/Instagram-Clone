import { useContext } from 'react';
import  axios  from 'axios';
import { GrFacebook } from "react-icons/gr";
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import AuthFooter from '../../Components/AuthFooter/AuthFooter';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cookie from 'js-cookie';
import AuthContext from '../../Context/AuthContext';
const Login = () => {

  // use context for auth
  const {dispatch } = useContext(AuthContext)
  const navigate = useNavigate();


  // create a toast alert
   const createToast = (msg) => {
  return toast(msg);
  };




  // set input for form data;
  const [input, setInput] = useState({
    auth : '',
    password : ''
  });

// submit for input fields data get
const handleInput = (e) => {
 e.preventDefault();
 setInput((prev) => ({...prev, [e.target.name] : e.target.value}));
}






// submit form for login
const handleSubmitLogin = async (e) =>{
 e.preventDefault();

 try {
  
  if(!input.auth || !input.password){
   createToast('All fields are required');
  }else{
   
  await axios.post('http://localhost:1100/api/User/login', { email : input.auth, password : input.password})
    .then( res => {
      console.log(res.data);
      
      createToast('Login Successfully ❤');
      cookie.set('token', res.data.token);
      dispatch({type : 'LOGIN_DATA_SUCCESS', payload : res.data.user});
      navigate('/');
       
      setInput({
        auth : '',
        password : '',
      });

    });
  }
 } catch (error) {
   createToast('wrong email or password');
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
            <form onSubmit={ handleSubmitLogin } className='login-form'>
                <input className='login-input' onChange={ handleInput } type="text" value={input.auth} name='auth' placeholder='username phone or email'/>
                <input className='login-input' onChange={ handleInput } name='password' value={input.passowrd} type="password" placeholder='password'/>
                <button className='login-submit' type='submit'>Log in</button>
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
        <AuthFooter />
        </div>
    </div>
  )
}

export default Login;