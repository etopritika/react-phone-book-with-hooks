import { useState, useEffect } from 'react';
const STORAGE_KEY = 'contacts';

export const useContacts = () => {
    const [contacts, setContacts] = useState(
        () => JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
      );
      const [filter, setFilter] = useState('');
    
      useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
      }, [contacts]);
    
      const formSubmitHandler = data => {
        setContacts(prevContacts => [...prevContacts, data]);
      };
    
      const filterInputChange = e => {
        const filterValue = e.currentTarget.value;
        setFilter(filterValue);
        filterContactsHandler();
      };
    
      const filterContactsHandler = () => {
        const filteredItems = contacts.filter(item =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        );
        return filteredItems;
      };
    
      const handleDeleteButton = id => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
      };
    
      const itemsToRender = filter ? filterContactsHandler() : contacts;

      return {contacts, filter, formSubmitHandler, filterInputChange, handleDeleteButton, itemsToRender};
}