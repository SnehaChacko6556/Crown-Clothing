import React from 'react';
import "./Button.scss"

// three types of button
//default button
//inverted button
//google sign in button

const BUTTON_TYPES_CLASSES = {
  google: 'google__sign__in',
  inverted: 'inverted',
}

const Button = ({ children, button_type, ...otherProps }) => {
  return (
    <button
      className={`button__container ${BUTTON_TYPES_CLASSES[button_type]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
