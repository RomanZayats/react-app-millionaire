import React from 'react'
import './QuestionBox.scss'
import Question from '../Question/Question'

const QuestionBox = (props) => {
  const q1 = props.questionObjArr[0]
  const q1Text = q1.questionText

  return (
    <div className='question-container'>
      <Question qText={q1Text}/>
    </div>
  )
}

export default QuestionBox