import React from 'react'
import useWinSize from '../../utils/hooks/useWinSize'
import '../../theme/styles/_variables.scss'

import mobileInactiveA from '../../theme/icons/mobile/options/InactiveA.svg'
import mobileInactiveB from '../../theme/icons/mobile/options/InactiveB.svg'
import mobileInactiveC from '../../theme/icons/mobile/options/InactiveC.svg'
import mobileInactiveD from '../../theme/icons/mobile/options/InactiveD.svg'

import desktopInactiveA from '../../theme/icons/desktop/options/InactiveA.svg'
import desktopInactiveB from '../../theme/icons/desktop/options/InactiveB.svg'
import desktopInactiveC from '../../theme/icons/desktop/options/InactiveC.svg'
import desktopInactiveD from '../../theme/icons/desktop/options/InactiveD.svg'

const Answer = (props) => {
  const {optionName, optionText} = props;

  const {width: winWidth} = useWinSize();

  function optionHandler (letter) {
    if (winWidth > 960) {
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
    } else {
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

  return (
    <a href='#'>
      <div className='option-box'
           style={{backgroundImage: `url(${optionHandler(optionName)})`}}
      >
        <p>{`${optionText}`}</p>
      </div>
    </a>
  )
}

export default Answer