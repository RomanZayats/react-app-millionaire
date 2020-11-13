import React from 'react';
import './Question.scss';

const Question = (props) => {
  const {questionText} = props;

  return (
    <div className='question-container'>
      <p>{questionText}</p>
    </div>
  )
}

export default Question