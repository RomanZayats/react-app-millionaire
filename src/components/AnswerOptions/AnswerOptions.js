import React, { useState } from 'react';
import './AnswerOptions.scss';
import Answer from './Answer';

const AnswerOptions = (props) => {
  const { questionObjArr, step, setStep } = props;
  const { questionAnswers } = questionObjArr[`${step}`];
  const [clicked, setClicked] = useState(false);

  const questionAnswersKeys = Object.keys(questionAnswers);
  const questionAnswersValues = Object.values(questionAnswers);

  return (
    <div className='answers-container'>
      <div className='answers-sub-container'>
        <Answer step={step}
                setStep={setStep}
                clicked={clicked}
                setClicked={setClicked}
                optionLetter='A'
                optionText={questionAnswersKeys[0]}
                optionValue={questionAnswersValues[0]}/>

        <Answer step={step}
                setStep={setStep}
                clicked={clicked}
                setClicked={setClicked}
                optionLetter='B'
                optionText={questionAnswersKeys[1]}
                optionValue={questionAnswersValues[1]}/>
      </div>
      <div className='answers-sub-container'>
        <Answer step={step}
                setStep={setStep}
                clicked={clicked}
                setClicked={setClicked}
                optionLetter='C'
                optionText={questionAnswersKeys[2]}
                optionValue={questionAnswersValues[2]}/>

        <Answer step={step}
                setStep={setStep}
                clicked={clicked}
                setClicked={setClicked}
                optionLetter='D'
                optionText={questionAnswersKeys[3]}
                optionValue={questionAnswersValues[3]}/>
      </div>
    </div>
  )
}

export default AnswerOptions;
