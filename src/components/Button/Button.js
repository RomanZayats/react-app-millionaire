import React from 'react';
import './Button.scss';

const Button = (props) => {
  const {className, text} = props;

  return (
    <button className={className}>{text}</button>
  )
}

export default Button;