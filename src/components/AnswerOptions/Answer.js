import React, { useState } from 'react'
import useWinSize from '../../utils/hooks/useWinSize'
import '../../theme/styles/_variables.scss'
import bgImgSubHandler from './utils'

const Answer = (props) => {
  const { optionLetter, optionText, optionValue, step, setStep, clicked, setClicked } = props;
  const { width: winWidth } = useWinSize();

  function stepCounter () {
    if (clicked) {
      setStep(step + 1)
    }
  }

  const defaultBgImg = `url(${bgImgSubHandler(winWidth, null, optionLetter, null)})`
  // const refreshBgImg = () => `url(${bgImgSubHandler(winWidth, null, optionLetter, null)})`

  function bgImgHandler (windowParams, event, letter, value) {
    if (event.target.tagName === 'DIV') {
      event.target.style.background = bgImgSubHandler(windowParams, event.type, letter, value)
    }
  }

  return (
    <a href='#'
       className='option-link'
       onClick={(e) => {
         setTimeout(() => {
           bgImgHandler(winWidth, e, optionLetter, null)
         }, 300)
         setTimeout(() => {
           bgImgHandler(winWidth, e, optionLetter, optionValue)
         }, 1200)
         setTimeout(() => {
           setClicked(true)
           stepCounter()
         }, 1500)
       }}
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

export default Answer