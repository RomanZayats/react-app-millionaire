import React from 'react';
import './Menu.scss';
import CloseBtn from '../CloseBtn/CloseBtn';

const Menu = (props) => {
  const { setShowMenu } = props;

  return (
    <div className='menu-container'>
      <CloseBtn onClick={() => setShowMenu(false)}/>
      <p>game path</p>
    </div>
  )
}

export default Menu;