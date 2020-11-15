import React, { memo } from 'react'
import './AnswerOptions.scss'
import AnswerItem from './AnswerItem'

const AnswersBox = (props) => {
  const { questionObjArr, step, setStep, winSumArr } = props
  const { questionAnswers } = questionObjArr[`${step}`]

  const questionAnswersKeys = Object.keys(questionAnswers)
  const questionAnswersValues = Object.values(questionAnswers)

  return (
    <div className='answers-container'>
      <div className='answers-sub-container'>
        <AnswerItem step={step}
                    setStep={setStep}
                    winSumArr={winSumArr}
                    optionLetter='A'
                    optionText={questionAnswersKeys[0]}
                    optionValue={questionAnswersValues[0]}/>

        <AnswerItem step={step}
                    setStep={setStep}
                    winSumArr={winSumArr}
                    optionLetter='B'
                    optionText={questionAnswersKeys[1]}
                    optionValue={questionAnswersValues[1]}/>
      </div>
      <div className='answers-sub-container'>
        <AnswerItem step={step}
                    setStep={setStep}
                    winSumArr={winSumArr}
                    optionLetter='C'
                    optionText={questionAnswersKeys[2]}
                    optionValue={questionAnswersValues[2]}/>

        <AnswerItem step={step}
                    setStep={setStep}
                    winSumArr={winSumArr}
                    optionLetter='D'
                    optionText={questionAnswersKeys[3]}
                    optionValue={questionAnswersValues[3]}/>
      </div>
    </div>
  )
}

export default memo(AnswersBox)
