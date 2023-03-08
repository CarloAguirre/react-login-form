import { useState } from 'react';
import './App.css';
import { AlertMsg } from './components/AlertMsg';

import LoginForm from './components/LoginFrom';

export const App = () => {


  let [formState, setformState] = useState(null)
  
  const [error, setError] = useState("incorrectos")

  

  return (
    <>
    <p className='ms-2'>mail: desafio@latam.com, password: 123456</p>    
      <LoginForm formstate = {formState} setformstate = {setformState}/> 
      {
      (formState === null)
      ? null 
      : <>
          <div id="msg" className="mt-3">
                    <AlertMsg validation={formState} />  
          </div>
        </>
      
      }
    </>
)
}

