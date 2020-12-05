import React, { Component } from 'react';
import './App.css';
import Phonebook from './Phonebook/Phonebook';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data.name);
    console.log(data.number);
  };

  render() {
    return (
      <>
        <Phonebook OnsaveContacts={this.formSubmitHandler} />
      </>
    );
  }
}

export default App;
