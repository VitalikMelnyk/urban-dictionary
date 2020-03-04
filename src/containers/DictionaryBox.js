import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Connect axios
import AOS from "aos";
// Connect react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// Redux files
import {
  setInputWord,
  setCardDescription,
  setIsAdditionalContent,
  fetchData
} from "../store/actions";

// connect other files
import { AppTitle } from "../components/AppTitle";
import { FormInput } from "../components/FormInput";
import { Spinners } from "../components/Spinners";
import { CardItem } from "../components/CardItem";
import { CardDescription } from "../components/CardDescription";
import "./DictionaryBox.scss";

export const DictionaryBox = props => {
  const {
    wordCards,
    inputWord,
    isAdditionalContent,
    isLoading,
    cardDescription
  } = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(inputWord);

  const handleChange = event => {
    const inputValue = event.target.value;
    dispatch(setInputWord(inputValue));
  };

  const openDescriptionContent = content => {
    dispatch(setCardDescription(content));
    console.log(cardDescription);
    dispatch(setIsAdditionalContent(true));
  };

  const closeDescriptionContent = () => {
    dispatch(setIsAdditionalContent(false));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchData(inputWord));
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
        <div
          className={
            isAdditionalContent
              ? "card-description-container-open"
              : "card-description-container-close"
          }
        >
          <div className="card-description-box">
            <CardDescription
              object={cardDescription}
              closeDescriptionContent={closeDescriptionContent}
            />
          </div>
        </div>
      </section>
    </>
  );
};
