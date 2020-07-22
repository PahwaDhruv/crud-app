import React, {Component} from 'react';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import {updateUser} from '../../store/actions/userActions';
// import {getUserById} from '../../store/actions/userActions';
import {connect} from 'react-redux';
class EditUser extends Component{
    constructor(props){
        super(props);
        this.state={
            user: {},
            isValidated:false
        }
    }
    handleChange = (event) => {
        const name=event.target.name;
        const value=event.target.value;
        const state=this.state.user
        state[name] = value
        this.setState({user:state});        
    }

    handleUpdate = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false)
        {
            event.preventDefault();
            event.stopPropagation();
           
        }
        else{
            event.preventDefault();
            const user = this.state.user;
            // console.log(user);
            this.props.updateUser(user)
            this.setState({
                isValidated: false
            });
            this.props.history.push("/");
        }
        this.setState({
            isValidated: true
        });
        
    }
    componentDidMount() {
        axios.get('/api/users/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  user: response.data
                 });
            })
            .catch(function (error) {
                console.log(error);
            })
      }
    render(){
        const {user} = this.state;
        // console.log(user);
        return(
                <Container>
                    <Form noValidate validated={this.state.isValidated} onSubmit={this.handleUpdate}>
                            <h1 className="text-center">Edit User</h1>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Name</Form.Label>
                                <Col sm={10}>
                                    <Form.Control required type="text" name="name" value={user.name || ""} onChange={this.handleChange}></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Email</Form.Label>
                                <Col sm={10}>
                                    <Form.Control required type="email" name="email" value={user.email || ""} onChange={this.handleChange}></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Mobile</Form.Label>
                                <Col sm={10}>
                                    <Form.Control required type="text" name="mobile" value={user.mobile || ""} onChange={this.handleChange}></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Sex</Form.Label>
                                <Col sm={10}>
                                    <div>
                                        <input  type="radio" required name="sex" value="Male"  onChange={this.handleChange} checked={(user.sex || "") === "Male"}></input>Male
                                        &nbsp;
                                        <input  type="radio" required name="sex" value="Female" onChange={this.handleChange} checked={(user.sex || "") === "Female"} ></input>Female
                                    </div>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>City</Form.Label>
                                <Col sm={10}>
                                    <Form.Control required type="text" name="city" value={user.city || ""} onChange={this.handleChange}></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={{span:10, offset: 2}}>
                                    <Button type="submit" variant="success">Update</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                </Container>
            
                        
        )
        
    }
} 

const mapDispatchToProps = (dispatch) => {
    return{
        updateUser: (user) => (dispatch(updateUser(user)))
    }
}
export default connect(null,mapDispatchToProps)(EditUser);
