import React from 'react';
import './BurgerBtn.scss';

const BurgerBtn = (props) => {
  const {onClick} = props;

  return (
      <button className='burger-btn'
              onClick={onClick}
      />
  )
}

export default BurgerBtn;