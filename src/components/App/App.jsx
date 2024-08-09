import React from 'react';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';

const App = () => {
  return (
    <div>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
