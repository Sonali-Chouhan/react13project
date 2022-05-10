import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { singIn } from "../Redux/Action/Action1";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const data = useSelector((state) => state.reducer?.message);

  const data1 = useSelector((state) => state.reducer?.errors);

  console.log("data1", data1);

  const handleLogin = (data) => {
    // if(data1?.data?.errors==="Invalid email and password"){
    //   toast.error("ivalid email and password")
    // }
    dispatch(singIn(data));
    toast.success(" 🚀Successfully SingIn");
  };

  useEffect(() => {
    if (data) {
      window.location.href = "/dashboard";
    }
  }, [data]);
  
  return (
    <div>
      <div className="FormDiv">
        <Form onSubmit={handleSubmit(handleLogin)}>
          <div className="field">
            <h3 className="heading">Login</h3>
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

            <Form.Group className="mb-4" controlId="formBasicPassword">
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

export default Login;
