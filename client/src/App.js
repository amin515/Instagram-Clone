

import { Route, Routes } from 'react-router-dom';
import './App.css';
import './App.scss'
import AuthenticateUser from './Middleware/AuthenticateUser';
import AuthRedirectUser from './Middleware/AuthREdirectUser';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './Context/AuthContext';
import Cookies from 'js-cookie';
function App() {

  //useContext

  const { dispatch } = useContext(AuthContext)

  // get cookies
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
        dispatch({type : 'LOGIN_DATA_SUCCESS', payload : res.data})
      })
      .catch( err => {
        console.log(err)
      });

    }catch (error) {
      console.log(error)
    }
  }, [dispatch, token])



  // useEffect(() => {
   
  // }, [])

  return (
    <>
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
