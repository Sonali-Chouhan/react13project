import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { CreatePost} from "../../Redux/Action/Auth";
const userId =   localStorage.getItem("User_Id")
const ContextAdd = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  
  const submit = (data) => {
    data['user_id'] = userId
    console.log("data", data);
    dispatch(CreatePost(data));
  };
 return (
    <div>
      <div className="createDiv">
        <Form onSubmit={handleSubmit(submit)}>
          <div className="createField">
            <h3 className="heading">Add-Context</h3>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Titile"
                {...register("title")}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                {...register("description")}
              />
            </Form.Group>
         {/* <Form.Control type="description"
           name="user_id"
           placeholder="Enter user_id"
           defaultValue={id}
           type = "hidden"
           {...register("user_id")}
         /> */}

            <input type="submit" className="buttonpost" />
          </div>
          
        </Form>
      
      </div>
    </div>
  );
};

export default ContextAdd;
