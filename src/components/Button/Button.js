import React from 'react'
import './Button.scss'
import PropTypes from 'prop-types'

const Button = (props) => {
  const {text, className} = props;

  return (
    <button className={'btn ' + className}>{text}</button>
  )
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string,
  // onClick: PropTypes.func.isRequired
}
//
// Button.defaultProps = {
//   className: 'btn',
//   text: 'Button',
//   backgroundColor: 'orangered'
// }

export default Button