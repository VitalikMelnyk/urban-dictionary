import React from "react";
import Button from "react-bootstrap/Button";

export const CardDescription = ({ object, closeDescriptionContent }) => {
  const { definition, author, word, written_on: written, example } = object;
  return (
    <>
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
    </>
  );
};
