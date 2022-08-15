

import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import './verify.scss';
import { createToast } from '../../../utility/toast';



const Verify = () => {

    const navigate = useNavigate();

    const params = useParams();
    const { id , token } = params;
    useEffect( () => {
      axios.post('http://localhost:1100/api/user/verify_acc',{

        id : id,
        token : token
      })

     
      .then( res => {
        navigate('/login');
      })

      .catch(err => {
        createToast('Account activation failed')
      });


    });
   
  return (
    <div>
      <h1>Verify your account</h1>
    </div>
  )
}

export default Verify
