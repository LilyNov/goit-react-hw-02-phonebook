import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Phonebook extends Component {
  static defaultProps = {
    contacts: [],
    name: '',
    number: '',
  };

  static propTypes = {
    contacts: PropTypes.array,
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.OnsaveContacts(this.state);

    this.setState(prevState => {
      return {
        contacts: prevState.contacts,
      };
    });

    this.reset();

    console.log(this.state);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>

          <label>
            Number
            <input
              name="number"
              tupe="text"
              value={this.state.number}
              onChange={this.handleChange}
            ></input>
          </label>

          <button type="submit">Add contact</button>
        </form>
        <ul>
          {' '}
          Contacts
          <li></li>
        </ul>
      </div>
    );
  }
}
