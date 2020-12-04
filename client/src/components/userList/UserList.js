import React, {Component} from 'react';
import {Jumbotron,Container,Table,Modal,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUsers,deleteUser} from '../../store/actions/userActions';
// import User from '../user/User';

class UserList extends Component{
    

    componentDidMount(){
        this.props.getUsers();
    }
    
//     componentDidUpdate(){
//         this.props.getUsers();
//     }

    delUser = (id) =>{
        this.props.deleteUser(id)
        // this.handleCloseModal();
    }
    
    render(){
        const {users}=this.props;
        // console.log(users);
        return(
            <Jumbotron>
            <Container>
            <Table responsive striped bordered hover variant="dark">
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
                            // <User key={index} user={user} index={index}></User>
                            <tr key={user._id}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>{user.sex}</td>
                                <td>{user.city}</td>
                                <td>
                                <Link to={"/edit/"+user._id} className="btn btn-primary">Edit</Link>
                                </td>
                                {/* <td><Button type="button" variant="primary" onClick={this.handleShowEditModal}>Edit</Button></td> */}
                                <td><Button type="button" variant="danger" onClick={() => this.delUser(user._id)}>Delete</Button></td>

                            </tr>
                        
                        ))
                    }
                </tbody>
            </Table>
            </Container>
            </Jumbotron>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.userReduce.users
    };
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getUsers: () => dispatch(getUsers()),
        deleteUser: (id) => dispatch(deleteUser(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
