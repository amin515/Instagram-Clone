import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProviders from './Providers/AuthContextProviders';
import LoaderContextProviders from './Providers/LoaderContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProviders>
        <LoaderContextProviders>
         <App />
        </LoaderContextProviders>
      </AuthContextProviders>
    </BrowserRouter>
  </React.StrictMode>
);


