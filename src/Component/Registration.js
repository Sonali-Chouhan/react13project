import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { singUp } from "../Redux/Action/Action1";

const Registration= () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const Data1=useSelector((state)=>state.reducer?.List?.data?.message);
  const  Data2=useSelector((state)=>state.reducer?.errors?.data?.errors);
  const dispatch = useDispatch();
   console.log("data 66",Data2)
  //Sing-Up Functionality Here
  const handleRegistration = (data) => {
    dispatch(singUp(data));
    if(Data2){
      toast.error("400:-)Email has already been taken")
    }
    // toast.success("🟢Successfully SingUp");
  };
  useEffect(()=>{
    if(Data1){
      toast.info("User Registered successfully :-)")
      window.location.href="/user-login"
    }
   
     
  },[Data1])

  return (
    <div>
      <div className="Formdiv">
        <Form onSubmit={handleSubmit(handleRegistration)}>
          <div className="fields">
            <h3 className="headings">Registration</h3>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter User Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  },
                })}
              />
              <p className="error">
                {errors.email?.type === "required" &&
                  "Email Address is required"}
              </p>
              <p className="error">
                {errors.email?.type === "pattern" && "must add Valid email"}
              </p>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter User Password"
                {...register("password", { required: true })}
              />
              <p className="error">
                {errors.password?.type === "required" && "Password  required"}
              </p>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Confirmation Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Confirmation Password"
                {...register("password_confirmation", { required: true })}
              />
              <p className="error">
                {errors.password?.type === "required" && "Password  required"}
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="buttons" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
