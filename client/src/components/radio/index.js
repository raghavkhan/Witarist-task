import React, { useState } from "react";

const Radio = (props) => {
  // const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <span>Priority: </span>
      <label htmlFor='radio1'>
        <input
          type='radio'
          id='radio1'
          name='radio'
          value='low'
          checked={props.priority === "low"}
          onChange={props.handleOptionChange}
        />
        Low
      </label>
      <label htmlFor='radio2'>
        <input
          type='radio'
          id='radio2'
          name='radio'
          value='medium'
          checked={props.priority === "medium"}
          onChange={props.handleOptionChange}
        />
        Medium
      </label>
      <label htmlFor='radio3'>
        <input
          type='radio'
          id='radio3'
          name='radio'
          value='high'
          checked={props.priority === "high"}
          onChange={props.handleOptionChange}
        />
        High
      </label>
    </div>
  );
};

export default Radio;
