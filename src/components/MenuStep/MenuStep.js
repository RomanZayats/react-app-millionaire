import React from 'react'

// import mobileStepCurrent from '../../theme/icons/mobile/steps/Current.svg'
// import mobileStepFinished from '../../theme/icons/mobile/steps/Finished.svg'
import mobileStepInactive from '../../theme/icons/mobile/steps/Inactive.svg'

// import desktopStepCurrent from '../../theme/icons/desktop/steps/Current.svg'
// import desktopStepFinished from '../../theme/icons/desktop/steps/Finished.svg'
import desktopStepInactive from '../../theme/icons/desktop/steps/Inactive.svg'
import useWinSize from '../../utils/hooks/useWinSize'

const MenuStep = () => {
  const { width: winWidth } = useWinSize()

  function stepHandler (width) {
    if (width > 960) {
      return desktopStepInactive
    } else {
      return mobileStepInactive
    }
  }

  return (
    <div className='step-box'
         style={{ backgroundImage: `url(${stepHandler(winWidth)})` }}
    >
      <p>'Hello'</p>
    </div>
  )
}

export default MenuStep