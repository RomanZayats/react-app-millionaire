import React from 'react'

import imgInactiveA from '../../theme/icons/mobile/options/InactiveA.svg'
import imgInactiveB from '../../theme/icons/mobile/options/InactiveB.svg'
import imgInactiveC from '../../theme/icons/mobile/options/InactiveC.svg'
import imgInactiveD from '../../theme/icons/mobile/options/InactiveD.svg'

const Answer = (props) => {
  const {optionName} = props;

  function optionHandler (letter) {
    switch (letter) {
      case 'A':
        return imgInactiveA
      case 'B':
        return imgInactiveB
      case 'C':
        return imgInactiveC
      case 'D':
        return imgInactiveD
      default:
        return 'ERR'
    }
  }

  return (
    <a href='#'>
      <div className='option-box'
           style={{backgroundImage: `url(${optionHandler(optionName)})`}}
      >
        <p>{`Option ${optionName}`}</p>
      </div>
    </a>
  )
}

export default Answer