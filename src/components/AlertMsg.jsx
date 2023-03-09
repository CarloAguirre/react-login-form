import React from 'react'
import Alert from 'react-bootstrap/Alert';

export const AlertMsg = ({error, succes, fail}) => {

let variant = "";
let valid = "";
if(error === null){
  return
}
if(error === true){ variant = "danger"; valid = fail}else{ variant = "success"; valid = succes }
    
    let template = ()=>{
        return <Alert key={variant} variant={variant}>
                    Los datos ingresados son {valid}!
                </Alert>
    }

  return (
    template()
  )
}
