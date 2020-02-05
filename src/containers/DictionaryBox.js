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
// connect other files
import "./DictionaryBox.css";
import { URBAN_KEY, URL_API } from "../shared/constants";

export const DictionaryBox = props => {
  const [wordCards, setWordCards] = useState([]);
  const [cardDescription, setCardDescription] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const [isAdditionalContent, setIsAdditionalContent] = useState(false);
  const {
    definition,
    permalink,
    author,
    word,
    written_on: written,
    example
  } = cardDescription;

  const handleChange = event => {
    // event.preventDefault();
    console.log(event.target.value);
    setInputWord(event.target.value);
  };

  const openDescriptionContent = content => {
    // console.log(content);
    setCardDescription(content);
    console.log(cardDescription);
    setIsAdditionalContent(true);
  };
  const closeDescriptionContent = () => {
    setIsAdditionalContent(false);
  };
  const handleSubmit = event => {
    // console.log("hello");
    event.preventDefault();
    axios
      .get(`${URL_API}/define?term=${inputWord}`, URBAN_KEY)
      .then(res => {
        console.log(res.data.list);
        const data = res.data.list;
        setWordCards(data);
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
      <section className="urban">
        <Container className="">
          <Row className="">
            <Col className="text-center urban-title" data-aos="fade-up">
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
                <Button variant="outline-success" className="" type="submit">
                  Find words
                </Button>
              </Col>
            </Row>
          </Form>
          {/* <p>{inputWord}</p> */}
          <Row className="cards-box no-gutters">
            {wordCards.map(card => (
              <Col className="" key={card.defid} data-aos="fade-left">
                <div
                  className="card-item"
                  onClick={() => openDescriptionContent(card)}
                >
                  <h3 className="card-item-title">{card.word}</h3>
                  <p className="card-item-definition">{card.definition}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <div className={isAdditionalContent ? "open" : "hidden"}>
          <div className="card-description">
            <h3 className="text-center card-description-title">{word}</h3>
            <div className="card-description-inner">
              <p>
                <span>Definition: </span>
                {definition}
              </p>
              <p>
                <span>Example: </span>
                {example}
              </p>
              <p>
                <span>Author: </span>
                {author}
              </p>
              <p>
                <span>Date: </span>
                {written}
              </p>
              {/* <i class="fas fa-thumbs-up"></i> */}
            </div>
          </div>

          <Button
            variant="outline-success"
            className="close-button"
            onClick={closeDescriptionContent}
          >
            Close
          </Button>
        </div>
      </section>
    </>
  );
};
