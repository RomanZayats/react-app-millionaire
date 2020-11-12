import React from 'react';
import Button from '../Button/Button';
import './Greetings.scss';

const Greetings = (props) => {
  const { resultsText, mainText, buttonText } = props;

  return (
    <div className='greetings-container'>
      <div>
        {resultsText && <p className='results-text'>{resultsText}</p>}
        <h2 className='greetings-text'>{mainText}</h2>
      </div>
      <Button className='btn' text={buttonText}/>
    </div>
  )
}

export default Greetings;