import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectLoading,
} from '../../redux/contacts/contactsSlice';
import Contact from '../Contact/Contact';
import { selectFilter } from '../../redux/contacts/filtersSlice';
import { fetchContactsThunk } from '../../redux/contacts/contactsOps';

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.contactsList}>
      {filteredData.length ? (
        filteredData.map((item) => (
          <li key={item.id}>
            <Contact item={item} />
          </li>
        ))
      ) : (
        <h2>No contacts added</h2>
      )}
      {loading && <h2>Loading...</h2>}
    </ul>
  );
};

export default ContactList;
