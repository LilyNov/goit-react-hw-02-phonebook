import React from 'react';

const ContactList = ({ contacts, ondeleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button onClick={() => ondeleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
