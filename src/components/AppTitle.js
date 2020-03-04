import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import RandomComponent from "./RandomComponent";

export const AppTitle = ({ title }) => {
  return (
    <>
      <Row className="">
        <Col className="text-center urban-title">
          <h1>{title}</h1>
          <RandomComponent />
        </Col>
      </Row>
    </>
  );
};
