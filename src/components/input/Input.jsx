import React from 'react'

const Input = (props) => {
     const { value, handleChange, placeholder, classname, name, type } = props;
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={classname}
        name={name}
      />
    </>
  );
}

export default Input
