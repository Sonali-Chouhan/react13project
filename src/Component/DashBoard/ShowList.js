import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowApi, DeletePost } from "../../Redux/Action/Auth";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'
const ShowList = () => {
  const dispatch = useDispatch();
  const record = useSelector((state) => state.Authreducer.Isshow);

  const handleShow = () => {
    dispatch(ShowApi());
  };
  const handleDelete=(id)=>{
    dispatch( DeletePost(id))
  }

  return (
    <div>
      <h2>Show-List</h2>
      <button onClick={handleShow}>Show</button>
      <div>
             {
                    record ?
                    <div>
                       <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>User_Id</th>
              <th>Created_at</th>
              <th>Updated_at</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.user_id}</td>
                  <td>{item.created_at}</td>
                  <td>{item.updated_at}</td>
                  <td>
                         <Button variant="warning"  onClick={()=>handleDelete(item.id)}>
                          Delete
                         </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
       </div>
       :
       <div>
              <h1 className="error">
                     Records Not Found
              </h1>
       </div>
             }
       
      </div>
    </div>
  );
};

export default ShowList;
