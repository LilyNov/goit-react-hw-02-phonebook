import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    //создаем объект контакта и добавляем в массив
    const myContacts = {
      id: uuidv1(),
      name: data.name,
      number: data.numder,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, myContacts],
      };
    });

    //проверяем дублируется контакт или нет при добавлении
    const getContacts = this.state.contacts.map(contact =>
      contact.name.toLocaleLowerCase(),
    );

    const isGetContactAlready = getContacts.includes(
      data.name.toLocaleLowerCase(),
    );

    if (isGetContactAlready) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
  };

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChangeFilter = e => {
    const { value } = e.currentTarget;
    console.log(value);
    this.setState({ filter: value });
  };

  filterContactsByName = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase()),
    );
  };

  render() {
    const contacts = this.filterContactsByName();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm OnSaveContacts={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          OnFilterContacts={this.handleChangeFilter}
        />
        <ContactList contacts={contacts} ondeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
