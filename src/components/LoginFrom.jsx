import "bootstrap/dist/css/bootstrap.min.css"; 

import { useState } from "react";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import { AlertMsg } from "./AlertMsg.jsx";
import "../index.css"

function LoginForm() {


    const [form, setForm] = useState({
        mail:"",
        pass: "",
        valid:""

    })

    const {mail, pass, valid} = form;

    const onChangeHandler = ({target})=>{
        const {value, name} = target

        setForm({
            ...form,
            [name]: value
        })
    }
    
    const onSubmitHandler = (event)=>{
      event.preventDefault()
      let msg = document.getElementById("msg")    
      if(mail.length > 6 && pass.length > 6){
        msg.style.display = ""
        setForm({
          ...form,
          valid: true
      })
      }else{

      }
    };

  return (
<>
    <Form className="form-wrapper" onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="mail" onChange={onChangeHandler} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name= "pass" onChange={onChangeHandler}/>
      </Form.Group>
      {
        (mail=== "" || pass === "")
        ? <Button variant="primary" type="submit" className="button-state" disabled>Submit</Button>
        : 
        <>
          <Button variant="primary" type="submit" className="button-state">Submit</Button>
          <div id="msg" style={{display: "none"}} className="mt-3">
            <AlertMsg validation={valid} />  
          </div>
        </>
      }

    </Form>
    
</>

  );
}

export default LoginForm;