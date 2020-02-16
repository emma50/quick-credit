import React from "react"
import { Form, Button } from 'react-bootstrap';

function Signup() {
    return (
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Signup
