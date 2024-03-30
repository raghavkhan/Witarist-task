import React, { useState } from 'react';
import SimpleInput from '../../components/simple-input';
import Radio from '../radio';

const UpdateForm = (props) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('');
  const [formDataArray, setFormDataArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { taskName, priority};
    setFormDataArray([...formDataArray, formData]);
    setTaskName('');
    setPriority('');
  };

  const handleOptionChange = (e) => {
    setPriority(e.target.value);
  };
  return (
    <div>
      <h2>Update :</h2>
      <form onSubmit={handleSubmit}>
      <SimpleInput
          label='Task Name'
          id='taskName'
          value={taskName}
          onChange={setTaskName}
        />
        <Radio handleOptionChange={handleOptionChange} priority={priority} />
        <button onClick={()=>{props.onUpdate(props.id, { taskName, priority })}}>Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
