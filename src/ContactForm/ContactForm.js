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
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.OnSaveContacts(this.state);
    this.reset();
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
              type="text"
              value={this.state.number}
              onChange={this.handleChange}
            ></input>
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
