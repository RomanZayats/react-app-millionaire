import React from 'react'

const Question = (props) => {
  const { questionText } = props;
  return (
    <p>
      {questionText}
    </p>
  )
}

export default Question