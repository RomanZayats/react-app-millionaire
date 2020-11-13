import React from 'react';
import './MenuBox.scss';
import MenuCloseBtn from '../MenuCloseBtn/MenuCloseBtn';
import useWinSize from '../../utils/hooks/useWinSize'

const MenuBox = (props) => {
  const { setShowMenu } = props;
  const {width: winWidth} = useWinSize();

  return (
    <div className='menu-container'>
      {winWidth < 960 && <MenuCloseBtn onClick={() => setShowMenu(false)}/>}
      <p>game path</p>
    </div>
  )
}

export default MenuBox;