import React from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import {toast}   from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { singIn } from "../Redux/Action/action";


const SingIn = () => {
    const {register,handleSubmit,formState: { errors }}=useForm();
    const records=useSelector((state)=>state.reducer.Data)
    const tokesss=records.data
    
    
    console.log(" const tokesss",tokesss)
    
    const object=useSelector((state)=>state.reducer.errors)
    console.log("records",records)
    console.log("object",object)
    const dispatch=useDispatch();
    let navigate = useNavigate();
    const handleRegistration=(data)=>{
      
       dispatch(singIn(data))
    console.log("data",data)
    toast.success(" 🚀Successfully SingIn", {
      position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      
  
    }
  return (
    <div>
     
      <div className="FormDiv">
      <Form onSubmit={handleSubmit(handleRegistration)}>
      
        <div className="field">
        <h3 className="heading">SingIn</h3>
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email"
            name="email"
            placeholder="Enter User Email"
            {...register("email", { required: true ,pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,}
              
            })}
            
          />
          <p className="error">{errors.email?.type === "required" && "Email Address is required"}</p>
          <p  className="error">{errors.email?.type === "pattern" && "must add Valid email"}</p> 
         
        </Form.Group>
       

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            name="password"
            placeholder="Enter User Password"
            {...register("password", { required: true })}
          />
         <p className="error">{errors.password?.type === "required" && "Password  required"}</p>  
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="button" type="submit">
          Submit
        </Button>
        </div>
      </Form>
      </div>
    </div>
  );
};

export default SingIn;
