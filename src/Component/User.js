import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'

//import { useSelector,useDispatch} from 'react-redux';

const LoginUser = () => {
    
    useEffect(()=>{
       
    })
  return (
    <div>
        <Table striped bordered hover variant="primary">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    </tbody>
    </Table>



    </div>
  )
}

export default LoginUser