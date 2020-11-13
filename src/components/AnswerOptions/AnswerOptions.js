import React from 'react'
import './AnswerOptions.scss'
import Answer from './Answer'

const AnswerOptions = () => {
  return (
    <div>
      <div className='answers-container'>
        <Answer optionName='A'/>
        <Answer optionName='B'/>
      </div>
      <div className='answers-container'>
        <Answer optionName='C'/>
        <Answer optionName='D'/>
      </div>
    </div>
  )
}

export default AnswerOptions
