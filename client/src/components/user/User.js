import React, {Component} from 'react';
import {Modal,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteUser, updateUser} from '../../store/actions/userActions';
class User extends Component{
    constructor(props){
        super(props);
        this.state={
            showDeleteModal: false,
            user: this.props.user,
        };
    }


    handleShowDeleteModal = () =>{
        this.setState({
            showDeleteModal: true
        });
    }

    handleCloseDeleteModal = () => {
        this.setState({
            showDeleteModal: false
        });
    }

    delUser = (id) =>{
        this.props.deleteUser(id)
        // this.handleCloseDeleteModal();
        // alert(id);
    }

    render(){
        const {user} = this.state;

        // console.log("this.state.user",user);
        return(
            <React.Fragment>
                <tr>
                    <td>{this.props.index+1}</td>
                    <td>{this.props.user.name}</td>
                    <td>{this.props.user.email}</td>
                    <td>{this.props.user.mobile}</td>
                    <td>{this.props.user.sex}</td>
                    <td>{this.props.user.city}</td>
                    <td>
                    <Link to={"/edit/"+this.props.user._id} className="btn btn-primary">Edit</Link>
                    </td>
                    {/* <td><Button type="button" variant="primary" onClick={this.handleShowEditModal}>Edit</Button></td> */}
                    <td><Button type="button" variant="danger" onClick={() => this.delUser(user._id)}>Delete</Button></td>
                </tr>



                 <Modal show={this.state.showDeleteModal} onHide={this.handleCloseDeleteModal}>
                     <Modal.Header>
                         <Modal.Title>Delete User</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                         Sure, You want to Delete {user.name} ?
                     </Modal.Body>
                     <Modal.Footer>
                         <Button type="button" variant="secondary" onClick={this.handleCloseDeleteModal}>No</Button>
                         <Button type="button" variant="primary" onClick={() => this.delUser(user._id)}>Yes</Button>
                     </Modal.Footer>
                 </Modal>
                
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deleteUser: (id) => dispatch(deleteUser(id)),
        updateUser: (user) => dispatch(updateUser(user))
    }
}


export default connect(null, mapDispatchToProps)(User);