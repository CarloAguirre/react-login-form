import React from 'react'
import Alert from 'react-bootstrap/Alert';

export const AlertMsg = ({validation}) => {


let variant = ""
if(validation === true){ variant = "success" }else{ variant = "danger"}
    
    let template = ()=>{
        return <Alert key={variant} variant={variant}>
                    This is a {variant} alert with{' '}
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
                    you like.
                </Alert>
    }

  return (
    template()
  )
}
