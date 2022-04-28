import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeletePost, PostList,ShowPost,Editpost} from "../../Redux/Action/Auth";
import { useNavigate } from "react-router";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const ShowList = () => {

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const record = useSelector((state) => state?.Authreducer?.User?.data?.posts);
  console.log("record",record)
  const handleDelete = (id) => {
    dispatch(DeletePost(id));
  };

  const handleShow = (id) => {
    dispatch(ShowPost(id))
    navigate("/showpost");
  };

  const handleEdit = (id) => {
    // dispatch(Editpost(id))
    // dispatch(UpdatePost(id))
     navigate(`/usercontext/${id}`);
  };

  useEffect(() => {
     dispatch(PostList());
  },[]);

  return (
    <div>
      <h2>Show-List</h2>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>User_Id</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {record?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.user_id}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() =>handleShow(item.id)}
                    >
                      Show
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
     
         
        
    </div>
  );
};

export default ShowList;
