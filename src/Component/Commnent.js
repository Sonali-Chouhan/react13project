// const request = instance.get("/posts")
// return {
//     type:show_list,
//     payload: request
// }
///
// export const ShowPost = (id) => {
 
  
//     return (dispatch) => {
        
//       return instance.get('/posts/:id')
//           .then(data => {
//               dispatch({
//                   type:show_post,
//                   payload: data
//               })
//           })
//           .catch(error => {
//               dispatch({
//                   type:"ERROR",
//                   payload: error.response
//               })
//           });
//   }
// };
// `/posts/${id}
///
//  {/* <Form.Control type="description"
//            name="user_id"
//            placeholder="Enter user_id"
//            defaultValue={id}
//            type = "hidden"
//            {...register("user_id")}
//          /> */}
////
//     const request = instance.get("/posts")
// return {
//     type:show_post,
//     payload: request
// }



// update
// if(id){
//   dispatch(Updata_User(id,user))
//   toast.success("Successfully Update", {
//     icon: "🟢",
//   });
//    }else{
//     dispatch(get_user(user));
//     toast.success("Successfully Submit", {
//       icon: "🚀"
//     });
//   }
// {
//   id ?
//   (
//     <span>
//       <button type="submit">Save</button>{' '}
//       <button type="submit"
//       onClick={handleCancel}>Cancel</button>
//     </span>
//    )
 
//   :
//   <input type="submit" name="Submit" />
  
// }
/* <Card style={{ width: "18rem" }} border="success" >
          <Card.Body >
          <ListGroup variant="flush" style={{backgroudColor:"black"}}>
            <ListGroup.Item>Id:-{isShow?.id}</ListGroup.Item>
            <ListGroup.Item>Title:-{isShow?.title}</ListGroup.Item>
            <ListGroup.Item>Description:-{isShow?.description}</ListGroup.Item>
            <ListGroup.Item>User_Id:-{isShow?.user_id}</ListGroup.Item>
            <ListGroup.Item>Crwated_at:-{isShow?.created_at} </ListGroup.Item>
            <ListGroup.Item>Updated_at:-{isShow?.updated_at} </ListGroup.Item>
            
            <Link to="/userlist">Go Back</Link>
          </ListGroup>
          </Card.Body>
          
        </Card> */
        // import React from "react";
// import { useSelector } from "react-redux";
// import { Button } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
// import { useNavigate } from "react-router";

// const ShowPost = () => {
//   let navigate = useNavigate();

//   const isShow = useSelector((state) => state?.Authreducer?.isShow?.data?.post);

//    const handleBack=()=>{
//     navigate("/userlist")
//    }
  
//   return (
//     <div>
//       <div>
//         <center>
//           <Modal.Dialog>
//           <Modal.Header>
//            <Modal.Title>Show_User</Modal.Title>
//          </Modal.Header>

//             <Modal.Body>
//              <h4>Id:- <p>{isShow?.id}</p></h4>
//              <h4>Title:-<p>{isShow?.title}</p></h4>
//              Description<p>{isShow?.description}</p>
//               user_Id<h4>{isShow?.user_id}</h4>
//               Create_At<h4>{isShow?.created_at}</h4>
//               Update_At<h4>{isShow?.updated_at}</h4>
//             </Modal.Body>

//             <Modal.Footer>

//                <Button variant="primary" onClick={handleBack}>Go</Button>
//             </Modal.Footer>
//           </Modal.Dialog>
          
//         </center>
//       </div>
//     </div>
//   );
// };

// export default ShowPost;
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
    