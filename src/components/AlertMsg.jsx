import React from 'react'
import Alert from 'react-bootstrap/Alert';

export const AlertMsg = ({validation, succes, fail}) => {


let variant = "";
let valid = "";
if(validation === true){ variant = "success"; valid = succes }else{ variant = "danger"; valid = fail}
    
    let template = ()=>{
        return <Alert key={variant} variant={variant}>
                    Los datos ingresados son {valid}!
                </Alert>
    }

  return (
    template()
  )
}
