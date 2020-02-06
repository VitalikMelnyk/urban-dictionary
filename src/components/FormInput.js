import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const FormInput = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <Form className="form" onSubmit={handleSubmit}>
        <Row className="text-center">
          <Col className="">
            <input
              type="text"
              className="form-control form-input"
              id="urban-words"
              placeholder="Enter any word what you want..."
              onChange={handleChange}
            />
            <Button variant="outline-success" className="" type="submit">
              Find words
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
