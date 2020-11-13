import React from 'react';
import './Button.scss';

const Button = (props) => {
  const {onClick, className, text} = props;

  return (
    <button className={className} onClick={onClick}>{text}</button>
  )
}

export default Button;