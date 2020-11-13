import React from 'react';
import './MenuBox.scss';
import MenuCloseBtn from '../MenuCloseBtn/MenuCloseBtn';
import useWinSize from '../../utils/hooks/useWinSize'
import MenuStep from '../MenuStep/MenuStep'

const MenuBox = (props) => {
  const { setShowMenu } = props;
  const {width: winWidth} = useWinSize();

  return (
    <div className='menu-container'>
      {winWidth < 960 && <MenuCloseBtn onClick={() => setShowMenu(false)}/>}
      <MenuStep/>
      <MenuStep/>
      <MenuStep/>
      <MenuStep/>
      <MenuStep/>
      <MenuStep/>
      <MenuStep/>
      <MenuStep/>
      <MenuStep/>
      <MenuStep/>
      <MenuStep/>
      <MenuStep/>
    </div>
  )
}

export default MenuBox;