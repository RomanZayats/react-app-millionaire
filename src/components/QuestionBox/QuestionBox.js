import React, { useState } from 'react'
import './QuestionBox.scss'
import Question from '../Question/Question'

const QuestionBox = (props) => {
  const {questionObjArr, step, setStep} = props;

  const questionObj = questionObjArr[`${step}`];
  const questionText = questionObj.questionText;

  // const questionTextArr = questionObjArr.map(q => q.questionText)
  // const questionAnswersArr = questionObjArr.map(q => q.questionAnswers)
  //
  // console.log(questionTextArr)
  // console.log(questionAnswersArr)

  return (
    <div className='question-container'>
      <Question questionText={questionText}/>
    </div>
  )
}

export default QuestionBox