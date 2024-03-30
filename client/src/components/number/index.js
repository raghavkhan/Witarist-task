import React from 'react'

const Number = ({ age, onChange }) => {
    const handleNumberChange = (e) => {
        onChange(e.target.value);
    };
    return (
        <div>
            <label htmlFor="age">Age:</label>
            <input
                type="number"
                id="age"
                value={age}
                onChange={handleNumberChange}
                required
            />
        </div>
    )
}

export default Number;