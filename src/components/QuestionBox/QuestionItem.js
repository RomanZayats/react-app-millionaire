import React from "react";

const QuestionItem = (props) => {
  const { questionText } = props;
  return <p>{questionText}</p>;
};

export default QuestionItem;
