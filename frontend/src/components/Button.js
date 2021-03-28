import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button style={{ backgroundColor: color }}
      className='bttn'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: '#e50914',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}


export default Button