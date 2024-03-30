import React, { useState } from "react";
// import Number from "../../components/number";
import SimpleInput from "../../components/simple-input";
import CreateTask from "../../services/create-task";
import Radio from "../../components/radio";

const Form = (props) => {
  // const [fullName, setFullName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [id, setId] = useState("");
  // const [age, setAge] = useState("");
  // const [city, setCity] = useState("");
  const [priority, setPriority] = useState("");
  const [formDataArray, setFormDataArray] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      id,
      taskName,
      // age: parseInt(age),
      // city,
      priority,
      // fullName,
    };
    setFormDataArray([...formDataArray, formData]);
    const createObject = await CreateTask(formData);
    // console.log(formData);
    // setFullName("");
    setTaskName("");
    // setAge("");
    // setCity("");
    setId("");
    setPriority("");

    props.setRefetch((prev) => !prev);
  };
  const handleOptionChange = (e) => {
    // console.log(e.target.value);
    setPriority(e.target.value);
  };

  // const handleNumberChange = (newAge) => {
  //   setAge(newAge);
  // };

  return (
    <div>
      <h3>Task Form</h3>
      <form onSubmit={handleSubmit}>
        <SimpleInput label='ID' id='id' value={id} onChange={setId} />
        <SimpleInput
          label='Task Name'
          id='taskName'
          value={taskName}
          onChange={setTaskName}
        />
        {/* <SimpleInput
          label='Full Name'
          id='fullName'
          value={fullName}
          onChange={setFullName}
        /> */}
        {/* <Number age={age} onChange={handleNumberChange} /> */}
        {/* <SimpleInput label='City' id='city' value={city} onChange={setCity} /> */}
        <Radio handleOptionChange={handleOptionChange} priority={priority} />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default Form;
