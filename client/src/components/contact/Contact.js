import React, { Component } from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
class Contact extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={{offset:3,span:6}}>
          <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Form>
          </Col>
        </Row>
      </Container>
 
    );
  }
}

export default Contact;