import React from 'react'
import useWinSize from '../../utils/hooks/useWinSize'
import '../../theme/styles/_variables.scss'

import mobileInactiveA from '../../theme/icons/mobile/options/InactiveA.svg'
import mobileInactiveB from '../../theme/icons/mobile/options/InactiveB.svg'
import mobileInactiveC from '../../theme/icons/mobile/options/InactiveC.svg'
import mobileInactiveD from '../../theme/icons/mobile/options/InactiveD.svg'

import mobileCorrectA from '../../theme/icons/mobile/options/CorrectA.svg'
import mobileCorrectB from '../../theme/icons/mobile/options/CorrectB.svg'
import mobileCorrectC from '../../theme/icons/mobile/options/CorrectC.svg'
import mobileCorrectD from '../../theme/icons/mobile/options/CorrectD.svg'

import mobileIncorrectA from '../../theme/icons/mobile/options/IncorrectA.svg'
import mobileIncorrectB from '../../theme/icons/mobile/options/IncorrectB.svg'
import mobileIncorrectC from '../../theme/icons/mobile/options/IncorrectC.svg'
import mobileIncorrectD from '../../theme/icons/mobile/options/IncorrectD.svg'

import desktopHoverA from '../../theme/icons/desktop/options/HoverA.svg'
import desktopHoverB from '../../theme/icons/desktop/options/HoverB.svg'
import desktopHoverC from '../../theme/icons/desktop/options/HoverC.svg'
import desktopHoverD from '../../theme/icons/desktop/options/HoverD.svg'

import desktopInactiveA from '../../theme/icons/desktop/options/InactiveA.svg'
import desktopInactiveB from '../../theme/icons/desktop/options/InactiveB.svg'
import desktopInactiveC from '../../theme/icons/desktop/options/InactiveC.svg'
import desktopInactiveD from '../../theme/icons/desktop/options/InactiveD.svg'

import desktopCorrectA from '../../theme/icons/desktop/options/CorrectA.svg'
import desktopCorrectB from '../../theme/icons/desktop/options/CorrectB.svg'
import desktopCorrectC from '../../theme/icons/desktop/options/CorrectC.svg'
import desktopCorrectD from '../../theme/icons/desktop/options/CorrectD.svg'

import desktopIncorrectA from '../../theme/icons/desktop/options/IncorrectA.svg'
import desktopIncorrectB from '../../theme/icons/desktop/options/IncorrectB.svg'
import desktopIncorrectC from '../../theme/icons/desktop/options/IncorrectC.svg'
import desktopIncorrectD from '../../theme/icons/desktop/options/IncorrectD.svg'

const Answer = (props) => {
  const { optionName, optionText, optionValue } = props

  const { width: winWidth } = useWinSize()

  function bgImgSubHandler (eventType, letter, value) {
    if (winWidth > 1280) {
      if (letter === 'A' && value === 'correct') {
        return `url(${desktopCorrectA})`
      }
      if (letter === 'B' && value === 'correct') {
        return `url(${desktopCorrectB})`
      }
      if (letter === 'C' && value === 'correct') {
        return `url(${desktopCorrectC})`
      }
      if (letter === 'D' && value === 'correct') {
        return `url(${desktopCorrectD})`
      }
      if (letter === 'A' && value === 'incorrect') {
        return `url(${desktopIncorrectA})`
      }
      if (letter === 'B' && value === 'incorrect') {
        return `url(${desktopIncorrectB})`
      }
      if (letter === 'C' && value === 'incorrect') {
        return `url(${desktopIncorrectC})`
      }
      if (letter === 'D' && value === 'incorrect') {
        return `url(${desktopIncorrectD})`
      }

      if (letter === 'A' && eventType === 'mouseover') {
        return `url(${desktopHoverA})`
      }
      if (letter === 'B' && eventType === 'mouseover') {
        return `url(${desktopHoverB})`
      }
      if (letter === 'C' && eventType === 'mouseover') {
        return `url(${desktopHoverC})`
      }
      if (letter === 'D' && eventType === 'mouseover') {
        return `url(${desktopHoverD})`
      }

      if (letter === 'A' && eventType === 'mouseleave') {
        return `url(${desktopInactiveA})`
      }
      if (letter === 'B' && eventType === 'mouseleave') {
        return `url(${desktopInactiveB})`
      }
      if (letter === 'C' && eventType === 'mouseleave') {
        return `url(${desktopInactiveC})`
      }
      if (letter === 'D' && eventType === 'mouseleave') {
        return `url(${desktopInactiveD})`
      }

      switch (letter) {
        case 'A':
          return desktopInactiveA
        case 'B':
          return desktopInactiveB
        case 'C':
          return desktopInactiveC
        case 'D':
          return desktopInactiveD
        default:
          return 'ERR'
      }
    } else if (winWidth <= 1280) {
      if (letter === 'A' && value === 'correct') {
        return `url(${mobileCorrectA})`
      }
      if (letter === 'B' && value === 'correct') {
        return `url(${mobileCorrectB})`
      }
      if (letter === 'C' && value === 'correct') {
        return `url(${mobileCorrectC})`
      }
      if (letter === 'D' && value === 'correct') {
        return `url(${mobileCorrectD})`
      }
      if (letter === 'A' && value === 'incorrect') {
        return `url(${mobileIncorrectA})`
      }
      if (letter === 'B' && value === 'incorrect') {
        return `url(${mobileIncorrectB})`
      }
      if (letter === 'C' && value === 'incorrect') {
        return `url(${mobileIncorrectC})`
      }
      if (letter === 'D' && value === 'incorrect') {
        return `url(${mobileIncorrectD})`
      }

      switch (letter) {
        case 'A':
          return mobileInactiveA
        case 'B':
          return mobileInactiveB
        case 'C':
          return mobileInactiveC
        case 'D':
          return mobileInactiveD
        default:
          return 'ERR'
      }
    }
  }

  function bgImgHandler (e, optionName, optionValue) {
    e.target.style.background = bgImgSubHandler(e.type, optionName, optionValue)
  }

  const defaultBgImg = `url(${bgImgSubHandler(null, optionName, null)})`

  return (
    <a href='#'
       onClick={(e) => bgImgHandler(e, optionName, optionValue)}
       // onMouseOver={(e) => bgImgHandler(e, optionName, null)}
       // onMouseLeave={(e) => bgImgHandler(e, optionName, null)}
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