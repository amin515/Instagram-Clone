

import { Route, Routes } from 'react-router-dom';
import './App.css';
import './App.scss'
import AuthenticateUser from './Middleware/AuthenticateUser';
import AuthRedirectUser from './Middleware/AuthREdirectUser';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import { useContext, useEffect, useState } from 'react';
import AuthContext from './Context/AuthContext';
import Cookies from 'js-cookie';
import LoadingBar from 'react-top-loading-bar'
import axios from 'axios';
import LoaderContext from './Context/LoaderContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  //useContext

  const { dispatch } = useContext(AuthContext)

  //get cookies
  const token = Cookies.get('token');

  
  //usr refresh data
  useEffect( () => {
    try {
      axios.get(`http://localhost:1100/api/user/me`, {
        headers : {
          "Authorization" : `Bearer ${token}`
        }

      })
      .then( res => {
        if(res.data.isVerified && token){
          dispatch({ type : 'LOGIN_DATA_SUCCESS', payload : res.data })
        } else{
          alert('Plz verified your account');
          Cookies.remove('token');
        }
       
      })
      .catch( err => {
        dispatch({type : 'USER_LOGOUT'})
      });

    }catch (error) {
      console.log(error)
    }
  }, [dispatch, token])


// progress bar

 const {loaderState, loaderDispatch} = useContext( LoaderContext)

  return (
    <>

      <LoadingBar
        color='#f11946'
        progress={loaderState}
        onLoaderFinished={() => loaderDispatch({type : 'LOADING_END'})}
      />
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

    <Routes>
      <Route path="/login"element={<AuthRedirectUser><Login /></AuthRedirectUser> }/>
      <Route path="/register"element={<AuthRedirectUser><Register /></AuthRedirectUser>}/>
      <Route path="/:id"element={<AuthenticateUser><Profile /></AuthenticateUser>}/>
      <Route path="/"element={<AuthenticateUser><Home /></AuthenticateUser>}/>
    </Routes>
    </>
  );
}

export default App;
