import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  return (
    <div className={s.listWrapper}>
      <Contact />
    </div>
  );
};

export default ContactList;
