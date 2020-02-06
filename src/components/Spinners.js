import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

export const Spinners = () => {
  return (
    <>
      <Row>
        <Col className="spinners">
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="success" />
        </Col>
      </Row>
    </>
  );
};
