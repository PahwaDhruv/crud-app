import React, {Component} from 'react';
import {Container,Table} from 'react-bootstrap';
import User from '../user/User';

class UserList extends Component{

    render(){
        const {users}=this.props;
        // console.log(users);
        return(
            <Container fluid>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Sex</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>  
                </thead>
                <tbody>
                    {
                        users && users.map((user,index) => (
                            <User key={index} user={user} index={index}></User>
                        ))
                    }
                </tbody>
            </Table>
            </Container>
        );
    }
}

export default UserList;