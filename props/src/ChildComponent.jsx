import React from 'react';

const ChildComponent = ({ onIncrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
};

export default ChildComponent;
