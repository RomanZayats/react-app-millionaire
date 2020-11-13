import React from 'react';
import './MenuBurgerBtn.scss';

const MenuBurgerBtn = (props) => {
  const {onClick} = props;

  return (
      <button className='burger-btn'
              onClick={onClick}
      />
  )
}

export default MenuBurgerBtn;