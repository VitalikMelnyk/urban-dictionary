import React, { useState, useEffect } from "react";

// Connect axios
import axios from "axios";
import AOS from "aos";

// Connect react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { AppTitle } from "../components/AppTitle";
import { FormInput } from "../components/FormInput";
import { Spinners } from "../components/Spinners";
import { CardItem } from "../components/CardItem";
import { CardDescription } from "../components/CardDescription";

// connect other files
import "./DictionaryBox.css";
import { URBAN_KEY, URL_API } from "../shared/constants";

export const DictionaryBox = props => {
  const [wordCards, setWordCards] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const [isAdditionalContent, setIsAdditionalContent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cardDescription, setCardDescription] = useState({});

  const handleChange = event => {
    console.log(event.target.value);
    setInputWord(event.target.value);
  };

  const openDescriptionContent = content => {
    setCardDescription(content);
    console.log(cardDescription);
    setIsAdditionalContent(true);
  };
  const closeDescriptionContent = () => {
    setIsAdditionalContent(false);
  };
  const handleSubmit = event => {
    setIsLoading(true);
    event.preventDefault();
    axios
      .get(`${URL_API}/define?term=${inputWord}`, URBAN_KEY)
      .then(res => {
        console.log(res.data.list);
        const data = res.data.list;
        setWordCards(data);
        setIsLoading(false);
        // console.log(wordCard);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <section className="urban">
        <Container className="">
          <AppTitle title="Urban Dictionary" />
          <FormInput handleChange={handleChange} handleSubmit={handleSubmit} />
          {isLoading ? (
            <Spinners />
          ) : (
            <Row className="cards-box no-gutters">
              <CardItem
                array={wordCards}
                openDescriptionContent={openDescriptionContent}
              />
            </Row>
          )}
        </Container>
        <div className={isAdditionalContent ? "open" : "hidden"}>
          <CardDescription
            object={cardDescription}
            closeDescriptionContent={closeDescriptionContent}
          />
        </div>
      </section>
    </>
  );
};
