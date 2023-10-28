import React from 'react';

const Button = ({ width, children, onClick, style }) => {
  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <button style={{  width, backgroundColor, color, children, onClick }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
