import React from 'react';
import Select from 'react-select'

const DropDownSelect = ({ options, tag, hChange, placeholder, cs, clearable = false, setVal = null }) => {
    const handleChange = (newValue, actionMeta) => {
        hChange(newValue, tag);
    };

    const customStyles = {
        ...cs,
        option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
            ...provided,
            backgroundColor: isSelected ? '#0584a0' : null,
            ':hover': {
                ...provided[':hover'],
                backgroundColor: isSelected ? data.color : 'rgba(5,132,160,0.5)',
            }
        }),
    }
    return (<Select
        options={options}
        onChange={handleChange}
        placeholder={placeholder}
        styles={customStyles}
        isClearable={clearable}
        defaultValue={setVal}
    />);
}
export default DropDownSelect;