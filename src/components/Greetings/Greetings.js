import React from "react";
import Button from "../Button/Button";
import "./Greetings.scss";
import { Link } from "react-router-dom";

const Greetings = (props) => {
  const { resultsText, mainText, buttonText } = props;

  return (
    <div className="greetings-container">
      <div>
        {resultsText && <p className="results-text">{resultsText}</p>}
        <h2 className="greetings-text">{mainText}</h2>
      </div>
      <Link to={"/game"}>
        <Button className="btn" text={buttonText} />
      </Link>
    </div>
  );
};

export default Greetings;
