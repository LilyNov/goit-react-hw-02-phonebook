import React from 'react';

const InputName = ({ onChangeName, name }) => (
  <>
    <label>
      Name
      <input
        name="name"
        type="text"
        value={name}
        onChange={onChangeName}
      ></input>
    </label>
  </>
);

export default InputName;
