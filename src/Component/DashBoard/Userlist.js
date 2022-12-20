import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeletePost, PostList, ShowPost } from "../../Redux/Action/Action2";
import { useNavigate } from "react-router";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Userlist = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const record = useSelector((state) => state?.Authreducer?.User?.data?.posts);

  const mess = useSelector((state) => state?.Authreducer?.message);

  console.log("record", record);

  const handleCreate = () => {
    navigate("/createuser");
  };

  const handleDelete = (id) => {
    dispatch(DeletePost(id));
  };

  const handleEdit = (id) => {
    navigate(`/createuser/${id}`);
    dispatch(ShowPost(id)); 
  };

  useEffect(() => {
    dispatch(PostList());
    if (mess) {
      dispatch(PostList());
    }
  }, [mess]);

  return (
    <div>
       <input 
        className="search"
        placeholder="Enter Title ..........."
        onChange={(event) => setSearch(event.target.value)}
      />
      <h2 className="memo1">User-List</h2>
     
      <Button className="memo" onClick={handleCreate} variant="info">
        Create-User
      </Button>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>User_Id</th>
              <th>Created_At</th>
              <th>Updated_At</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {record
              ?.filter((post) => {
                if (search === "") {
                  return post;
                } else if (
                  post.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return post;
                }
              })
              .map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.user_id}</td>
                    <td>{item.created_at}</td>
                    <td>{item.updated_at}</td>
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

export default Userlist;
