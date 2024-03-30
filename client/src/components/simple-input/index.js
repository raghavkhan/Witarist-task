import React from 'react';

const SimpleInput = (props) => {
  const { label, id, value, onChange } = props;

  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default SimpleInput;
