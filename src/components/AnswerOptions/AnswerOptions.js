import React from 'react'
import './AnswerOptions.scss'
import Answer from './Answer'

const AnswerOptions = (props) => {
  const {answerOptions} = props;

  return (
    <div className='answers-container'>
      <div>
        <Answer optionName='A' optionText={answerOptions[0]}/>
        <Answer optionName='B' optionText={answerOptions[1]}/>
      </div>
      <div>
        <Answer optionName='C' optionText={answerOptions[2]}/>
        <Answer optionName='D' optionText={answerOptions[3]}/>
      </div>
    </div>
  )
}

export default AnswerOptions
