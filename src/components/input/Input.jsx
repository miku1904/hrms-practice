import React from 'react'

const Input = (props) => {
     const {
       value,
       handleChange,
       placeholder,
       classname,
       name,
     } = props;
  return (
    <>
      <input
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
