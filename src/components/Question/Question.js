import React from 'react'

const Question = (props) => {
  const { qText } = props;
  return (
    <p>
      {qText}
    </p>
  )
}

export default Question