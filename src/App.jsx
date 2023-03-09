import { useState } from 'react';
import './App.css';
import { AlertMsg } from './components/AlertMsg';

import LoginForm from './components/LoginFrom';

export const App = () => {


  let [error, setError] = useState({
    state: null,
    succes: "correcto",
    fail: "incorrecto"
  })
  
  return (
    <>
    <p className='ms-2'>mail: desafio@latam.com, password: 123456</p> 
    <div id="loginForm">
      <LoginForm error = {error} setError = {setError} /> 
    </div>   
      {
      (error === null)
      ? null 
      : 
       <>
          <div className="mt-3">
                    <AlertMsg validation={error.state} succes={error.succes} fail={error.fail} />  
          </div>
        </>     
      }
    </>
)
}

