import React from 'react';
import PropTypes from 'prop-types';
import css from '../css-modules/Contacts.module.css';

export default function Contacts({ contacts, deleteButton }) {
  return (
    <>
      <ul className={css.contacts__list}>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.delete__button}
              onClick={() => deleteButton(contact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteButton: PropTypes.func,
};
