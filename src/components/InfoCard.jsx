import React from 'react';

const InfoCard = ({ title, content, className }) => {
  return (
    <div className={`info-card ${className}`}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default InfoCard;
