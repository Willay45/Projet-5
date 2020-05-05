import React from 'react';

const Card = ({ text, color, heightCard, widthCard }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: widthCard,
        height: heightCard,
        backgroundColor: `${color}`,
        justifyContent: 'center',
        margin: 20
      }}
    >
      <p
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.4em'
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Card;
