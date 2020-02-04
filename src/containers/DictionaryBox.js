import React, { useState, useEffect } from "react";

// Connect axios
import axios from "axios";

import AOS from "aos";

// Connect react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./DictionaryBox.css";

const URBAN_KEY = {
  headers: {
    "x-rapidapi-key": "fd7f461f40mshb035cc0f7e57873p193233jsna5e723db7381"
  }
};

export const DictionaryBox = props => {
  const [wordCard, setWordCard] = useState([]);
  const [word, setWord] = useState("");

  const handleChange = event => {
    // event.preventDefault();
    console.log(event.target.value);
    setWord(event.target.value);
  };

  const handleSubmit = event => {
    // console.log("hello");
    event.preventDefault();
    axios
      .get(
        `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,
        URBAN_KEY
      )
      .then(res => {
        console.log(res.data.list);
        const data = res.data.list;
        setWordCard(data);
        // console.log(wordCard);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    AOS.init({
      //   once: false
    });
  });

  return (
    <>
      <section>
        <Container className="">
          <Row className="">
            <Col className="text-center" data-aos="fade-up">
              <h1>Urban Dictionary</h1>
            </Col>
          </Row>
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
                <Button variant="outline-primary" className="" type="submit">
                  Find words
                </Button>
              </Col>
            </Row>
          </Form>
          {/* <p>{word}</p> */}
          <Row className="cards-box">
            {wordCard.map(card => (
              <Col className="" key={card.defid}>
                <div className="card-item" data-aos="fade-left">
                  <p>{card.definition}</p>
                  <p>{card.word}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};
