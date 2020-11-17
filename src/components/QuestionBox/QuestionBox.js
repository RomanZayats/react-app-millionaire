import React, { memo } from "react";
import "./QuestionBox.scss";
import QuestionItem from "./QuestionItem";

const QuestionBox = (props) => {
  const { questionObjArr, step } = props;

  const questionObj = questionObjArr[`${step}`];
  const questionText = questionObj.questionText;

  return (
    <div className="question-container">
      <QuestionItem questionText={questionText} />
    </div>
  );
};

export default memo(QuestionBox);
