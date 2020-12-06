import React from 'react';

const Filter = ({ value, OnFilterContacts }) => (
  <>
    <label>
      Fined contacts by name
      <input
        type="text"
        value={value}
        onChange={() => OnFilterContacts(value)}
      ></input>
    </label>
  </>
);

export default Filter;
