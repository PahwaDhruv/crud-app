import React, {Component} from 'react';
import {Jumbotron,Container,Row,Col,Form,Button} from 'react-bootstrap';
// import uuid from 'uuid';
import {createUser} from '../../store/actions/userActions';
import {connect} from 'react-redux';

class AddUser extends Component{

    constructor(props){
        super(props);
        this.state={
            name: "",
            email: "",
            mobile: "",
            sex: "",
            city: "",
            isValidated: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false)
        {
            event.preventDefault();
            event.stopPropagation();
            
        }
        else{
            event.preventDefault();
            const user=this.state;
            this.props.addUser(user);
            this.setState({
                name: "",
                email: "",
                mobile: "",
                sex: "",
                city: "",
                isValidated: false,
            });
            this.props.history.push("/");
        }
        this.setState({
            isValidated: true
        });
        // console.log(user);
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
        
    }

    render(){
        return( 
            <Jumbotron>
                <Container>
                <Form noValidate validated={this.state.isValidated} onSubmit={this.handleSubmit}>
                    <h1 className="text-center">Add User</h1>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Name:</Form.Label>
                            <Col sm={10}>
                                <Form.Control required type="text" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange}></Form.Control>
                            </Col>    
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Email:</Form.Label>
                            <Col sm={10}>
                            <Form.Control required type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange}></Form.Control>
                            </Col>
                            
                        </Form.Group>
                    

                    
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Mobile:</Form.Label>
                            <Col sm={10}>
                            <Form.Control required type="text" name="mobile" placeholder="Enter Mobile No." value={this.state.mobile} onChange={this.handleChange}></Form.Control>
                            </Col>
                            
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Sex:</Form.Label>
                            <Col sm={10}>
                            <div>
                                <input required type="radio"  name="sex" value="Male" onChange={this.handleChange}></input>Male
                                &nbsp;
                                <input required type="radio"  name="sex" value="Female" onChange={this.handleChange}></input>Female
                            </div>
                            </Col>
                            
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>City:</Form.Label>
                            <Col sm={10}>
                            <Form.Control required type="text" name="city" placeholder="Enter City" value={this.state.city} onChange={this.handleChange}></Form.Control>
                            </Col>
                            
                        </Form.Group>
                    
                    
                        <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Add User</Button>
                        </Col>
                            
                        </Form.Group>
                    
                </Form>
                </Container>
                </Jumbotron>
        );
    }
}

const mapDispatchToProps=(dispatch) => {
    return {
        addUser: (user) => dispatch(createUser(user))
    }
}
export default connect(null,mapDispatchToProps)(AddUser);