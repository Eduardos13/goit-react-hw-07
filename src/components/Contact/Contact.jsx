import React from 'react';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsSlice';
import { RxCross2 } from 'react-icons/rx';

const Contact = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.contactWraper}>
      <div className={s.infoWrapper}>
        <p className={s.nameBox}>{item.name}</p>
        <p className={s.numberBox}>{item.number}</p>
      </div>
      <button
        className={s.deleteBtn}
        onClick={() => dispatch(deleteContact(item.id))}
      >
        <RxCross2 />
      </button>
    </div>
  );
};

export default Contact;
