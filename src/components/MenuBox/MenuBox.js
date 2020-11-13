import React from 'react';
import './MenuBox.scss';
import MenuCloseBtn from '../MenuCloseBtn/MenuCloseBtn';

const MenuBox = (props) => {
  const { setShowMenu } = props;

  return (
    <div className='menu-container'>
      <MenuCloseBtn onClick={() => setShowMenu(false)}/>
      <p>game path</p>
    </div>
  )
}

export default MenuBox;