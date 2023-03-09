import React from 'react'
import Alert from 'react-bootstrap/Alert';

export const AlertMsg = ({validation, succes, fail}) => {

let variant = "";
let valid = "";
if(validation === null){
  return
}
if(validation === true){ variant = "danger"; valid = fail}else{ variant = "success"; valid = succes }
    
    let template = ()=>{
        return <Alert key={variant} variant={variant}>
                    Los datos ingresados son {valid}!
                </Alert>
    }

  return (
    template()
  )
}
