import React from 'react'
import Alert from 'react-bootstrap/Alert';

export const AlertMsg = ({validation}) => {


let variant = "";
let valid = "";
if(validation === true){ variant = "success"; valid = "correctos" }else{ variant = "danger"; valid = "incorrectos"}
    
    let template = ()=>{
        return <Alert key={variant} variant={variant}>
                    Los datos ingresados son {valid}!
                </Alert>
    }

  return (
    template()
  )
}
