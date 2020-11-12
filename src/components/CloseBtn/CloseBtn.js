import React from 'react';
import './CloseBtn.scss';

const CloseBtn = (props) => {
  const {onClick} = props;

  return (
    <button className='close-btn'
            onClick={onClick}
    />
  )
}

export default CloseBtn;