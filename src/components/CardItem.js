import React, { useEffect } from "react";
import AOS from "aos";
import Col from "react-bootstrap/Col";

export const CardItem = ({ array, openDescriptionContent }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      {array.length !== 0 ? (
        array.map(item => (
          <Col className="" key={item.defid} data-aos="fade-left">
            <div
              className="card-item"
              onClick={() => openDescriptionContent(item)}
            >
              <h3 className="card-item-title">{item.word}</h3>
              <p className="card-item-definition">{item.definition}</p>
            </div>
          </Col>
        ))
      ) : (
        <Col className="" data-aos="fade-left">
          <div className="card-item card-item-nothing">
            <p className="text-center">There aren't any word what you want!</p>
          </div>
        </Col>
      )}
    </>
  );
};
