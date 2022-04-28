import React from "react";
import { useSelector } from "react-redux";
import { Card, ListGroup,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowPost = () => {
  const isShow = useSelector((state) => state?.Authreducer?.isShow?.data?.post);

  return (
    <div>
      <div><center>
        <Card style={{ width: "18rem" }} border="success" >
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
          
        </Card>
        </center>
      </div>
    </div>
  );
};

export default ShowPost;
