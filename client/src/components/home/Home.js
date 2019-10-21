import React, {Component} from 'react';
// import AddUser from '../addUser/AddUser';
import UserList from '../userList/UserList';
import {Jumbotron,Container} from 'react-bootstrap';

import {connect} from 'react-redux';
import {getUsers} from '../../store/actions/userActions';
class Home extends Component{
    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        const {users} = this.props;
        // console.log(users);
        return(
            <Jumbotron>
                <Container>
                    <UserList users={users}></UserList>
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
export default connect(mapStateToProps, {getUsers})(Home);