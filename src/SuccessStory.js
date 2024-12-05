import React, { useEffect } from 'react';

const SuccessStory = ({ story, onRandomValue }) => {
    useEffect(() => {
      const randomValue = Math.floor(Math.random() * 100);
      onRandomValue(randomValue);
    }, [onRandomValue]);
  return (
    <div className="success-story">
      <h3>Success Story</h3>
      <p>{story}</p>
    </div>
  );
};

export default SuccessStory;