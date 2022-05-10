import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { CreatePost, UpdatePost } from "../../Redux/Action/Action2";
const userId = localStorage.getItem("User_Id");

const Createuser = () => {
  const dispatch = useDispatch();

  let { id } = useParams();
  

  const { register, handleSubmit, setValue } = useForm();

  let navigate = useNavigate();

  
  const isShow = useSelector((state) => state?.Authreducer?.User?.data?.post);
  console.log("hhhh",isShow)
  

  const submit = (data) => {
    data["user_id"] = userId;
    if (id) {
      dispatch(UpdatePost(id, data));
    } else {
      dispatch(CreatePost(data));
     
    }
    navigate("/userlist");
    
  };
  const handleCancel = () => {
    window.location.href="/createuser"

  };
  useEffect(() => {
    const items = isShow;
    if (items) {
      setValue("title", items.title);
      setValue("description", items.description);
    }
  }, [isShow]);

  return (
    <div>
      <div className="createDiv">
        <Form onSubmit={handleSubmit(submit)}>
          <div className="createField">
            <h3 className="heading">Create-User</h3>
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

            {id ? (
              <span>
                <button className="buttonpost" type="submit">
                  Save
                </button>{" "}
                <button
                  className="buttonpost"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </span>
            ) : (
              <input type="submit" className="buttonpost" />
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Createuser;
