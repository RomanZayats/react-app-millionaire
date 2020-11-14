import React from 'react'
import './AnswerOptions.scss'
import Answer from './Answer'

const AnswerOptions = (props) => {
  const {questionObjArr, answerOptions} = props;
  const {questionAnswers} = questionObjArr[0];

  const questionAnswersKeys = Object.keys(questionAnswers)
  const questionAnswersValues = Object.values(questionAnswers)

  return (
    <div className='answers-container'>
      <div className='answers-sub-container'>
        <Answer optionName='A' optionText={questionAnswersKeys[0]} optionValue={questionAnswersValues[0]}/>
        <Answer optionName='B' optionText={questionAnswersKeys[1]} optionValue={questionAnswersValues[1]}/>
      </div>
      <div className='answers-sub-container'>
        <Answer optionName='C' optionText={questionAnswersKeys[2]} optionValue={questionAnswersValues[2]}/>
        <Answer optionName='D' optionText={questionAnswersKeys[3]} optionValue={questionAnswersValues[3]}/>
      </div>
    </div>
  )
}

export default AnswerOptions
