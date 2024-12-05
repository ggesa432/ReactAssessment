import React from 'react';
import SuccessStory from './SuccessStory';

const SuccessChild = ({ name, address,story , onRandomValue}) => {
  return (
    <div className="success-child">
      <h2>Success Child Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Address:</strong> {address}</p>
      <SuccessStory story={story} onRandomValue={onRandomValue}/>
    </div>
  );
};

export default SuccessChild;