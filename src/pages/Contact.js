import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactLetters from '../components/contact/ContactLetters';
import EarthCanvas from '../components/contact/EarthCanvas';
import Header from '../components/navigation/Header';

const Contact = () => {
  return (
    <>
      <Header/>
      <div>
      <EarthCanvas/>
      <ContactLetters/>
      <ContactForm/>
      </div>
    </>
  );
};

export default Contact;
