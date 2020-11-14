import React, { memo, useState } from 'react'
import useWinSize from '../../utils/hooks/useWinSize'
import '../../theme/styles/_variables.scss'
import bgImgSubHandler from './utils'

const AnswerItem = (props) => {
  const { optionLetter, optionText, optionValue, step, setStep, clicked, setClicked, setResult, winSumArr } = props
  const { width: winWidth } = useWinSize()
  const defaultBgImg = `url(${bgImgSubHandler(winWidth, null, optionLetter, null)})`

  const stepCounter = (gameStep) => {
    localStorage.setItem('result', JSON.stringify(winSumArr[`${gameStep}`]))
    setStep(gameStep + 1)
  }

  // const refreshBgImg = () => `url(${bgImgSubHandler(winWidth, null, optionLetter, null)})`;

  const bgImgHandler = (windowParams, event, letter, value) => {
    if (event.target.tagName === 'DIV') {
      event.target.style.background = bgImgSubHandler(windowParams, event.type, letter, value)
    }
  }

  const optionClickHandler = (windowParams, event, letter, value) => {
    setTimeout(() => {
      bgImgHandler(windowParams, event, letter, null)
    }, 100)
    setTimeout(() => {
      bgImgHandler(windowParams, event, letter, value)
    }, 200)
    setTimeout(() => {
      // setClicked(true)
      stepCounter(step)
    }, 300)
  }

  return (
    <a href='#'
       className='option-link'
       onClick={(e) => optionClickHandler(winWidth, e, optionLetter, optionValue)}
      // onMouseOver={(e) => bgImgHandler(winWidth, e, optionLetter, null)}
      // onMouseLeave={(e) => bgImgHandler(winWidth, e, optionLetter, null)}
    >
      <div className='option-box'
           style={{ background: defaultBgImg }}
      >
        <p>{`${optionText}`}</p>
      </div>
    </a>
  )
}

export default memo(AnswerItem)