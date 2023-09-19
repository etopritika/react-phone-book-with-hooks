import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../css-modules/ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = ({ button, onSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const nameId = nanoid();
    const newName = {
      id: nameId,
      name: name,
      number: number,
    };

    const existingContact = contacts.find(
      contact => contact.name === newName.name
    );
    if (existingContact) {
      alert(`${newName.name} is already in contacts!`);
      return;
    }

    onSubmit(newName);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className="form__container">
      <form className={css.submit__form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">{button}</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  button: PropTypes.string,
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
