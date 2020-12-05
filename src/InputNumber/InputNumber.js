import React from 'react';

const InputNumber = ({ onChangeNumber, number }) => (
  <>
    <label>
      Number
      <input
        name="number"
        type="text"
        value={number}
        onChange={onChangeNumber}
      ></input>
    </label>
  </>
);

export default InputNumber;
