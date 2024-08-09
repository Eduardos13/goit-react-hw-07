import React from 'react';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSlice';
import Contact from '../Contact/Contact';
import { selectFilter } from '../../redux/contacts/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.contactsList}>
      {filteredData.map((item) => (
        <li key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
