import React from 'react';

export const Input = ({ inputTitle, inputValue, onInputChange }) => {
    const handleInputChange = (event) => {
        onInputChange(event.target.value);
    }

    return (
        <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-darker"
            placeholder={inputTitle}
            value={inputValue}
            onChange={handleInputChange}
        />
    )
}