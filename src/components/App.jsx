import React from 'react';
import { ContactForm } from './ContactForm';
import Filter from './Filter';
import Contacts from './Contacts';
import { useContacts } from './useContacts';

export const App = () => {
  const {
    contacts,
    filter,
    formSubmitHandler,
    filterInputChange,
    handleDeleteButton,
    itemsToRender,
  } = useContacts();

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm
        button="Add contact"
        onSubmit={formSubmitHandler}
        contacts={contacts}
      />
      <h2>Contacts</h2>
      <Filter inputValue={filter} onChange={filterInputChange} />
      <Contacts contacts={itemsToRender} deleteButton={handleDeleteButton} />
    </section>
  );
};
