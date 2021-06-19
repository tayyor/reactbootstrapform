import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const PersDet = function () {
  return (
    <div className="main grid-3">
      <div className="container  card cards">
        <header>
          <div className="alert alert-success">
            <i className="fas fa-info"></i>Your Personal Infomation is save with
            us
          </div>
          Processing of personal information We store your data on specially
          protected servers within the European Union. These are protected by
          technical and organisational measures against loss, destruction,
          access, modification or dissemination of your data by unauthorised
          persons. Access to your data is only permitted for a limited number of
          authorised persons. They are responsible for the technical, commercial
          or editorial support of the servers. Despite regular checks, however,
          complete protection against all risks is not possible. Your personal
          data is transmitted over the internet in encrypted form. We use SSL
          encryption (Secure Socket Layer) for data transmission.
        </header>
      </div>
      <div className="container card ">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PersDet;
