import React, { useState } from 'react';

const ContactListManager = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // إضافة جهة اتصال جديدة
  const addContact = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      const newContact = { name, email, phone };
      setContacts([...contacts, newContact]);
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  // حذف جهة الاتصال
  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h2>Contact List Manager</h2>
      <form onSubmit={addContact}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <button type="submit">Add Contact</button>
      </form>
      
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactListManager;
