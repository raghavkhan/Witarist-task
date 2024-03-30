import React, { useState } from "react";

// const style = {
//   position: "fixed",
//   top: "20vh",
//   left: "20vh",
// };

const DropDown = ({ data, setData, setRefetch, useData }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    if (event.target.value === "all") {
      setData(useData);
      setRefetch((prev) => !prev);
    }
    setSelectedOption(event.target.value);
    const filteredData = useData?.filter(
      (ob) => ob?.priority === event.target.value
    );
    setData(filteredData);
  };
  return (
    <div>
      {/* <input
        type='text'
        id='search-bar'
        name='searchBar'
        placeholder='Search for a book...'
      /> */}
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value=''>Select Priority...</option>
        <option value='all'>All</option>
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>
    </div>
  );
};

export default DropDown;
