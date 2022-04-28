import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { CreatePost,UpdatePost } from "../../Redux/Action/Auth";
const userId = localStorage.getItem("User_Id");

const ContextAdd = () => {


  const dispatch = useDispatch();

   let { id } = useParams();

  const { register, handleSubmit, setValue } = useForm();

  let navigate = useNavigate();

  const Data = useSelector((state) =>state?.Authreducer?.User?.data?.posts);

  console.log("D1", Data);

  const submit = (data) => {
    data["user_id"] = userId;
    // if(id){
    //   dispatch(UpdatePost(id,data))
    // }
    // else{}
      dispatch(CreatePost(data));
   
  navigate("/userlist");
  };

 useEffect(() => {
   
// const item=Data
// if(item?.id===id){
//   setValue("title",item?.title)
//   setValue("description",item?.description)
// }
  // const items= Data
  //   console.log("iii",items)
  //   items?.map((e) => {
     
  //      if (id ===e.id ) {
  //       console.log("ggg",e.id)
  //       setValue("title",e.title)
  //       setValue("description",e.description)
  //     }
  //     else{
  //       console.log("Error",id)
  //     }
  // })

 
   
 

  }, []);

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
            {
            id ?
          (
            <span>
              <button type="submit">Save</button>{' '}
              {/* <button type="submit"
              onClick={handleCancel}>Cancel</button> */}
            </span>
           )
         
          :
          <input type="submit" name="Submit" />
          
        }
            <input type="submit" className="buttonpost" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContextAdd;
// { 
//   isShow ?
//   <div>
//     <input value={isShow?.id} /><br/>
//     <input value={isShow?.title} /><br/>
//     <input value={isShow?.description} /><br/>
//     <input value={isShow?.user_id} /><br/>
//     <input value={isShow?.created_at} /><br/>
//     <input value={isShow?.updated_at} /><br/>
//     <Link to="">Back to Show_List</Link>
//   </div>