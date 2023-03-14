import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Container, TextField, Typography} from "@mui/material";
// import styles from './ContactForm.module.css';

import { fetchAddContact } from 'redux/contacts/contacts-operations';

import { selectContacts } from 'redux/contacts/contacts-selectors';
// import { addContact } from 'redux/contacts/contacts-slice';
// import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };


  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name,
      number,
    };

 
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase());

    checkContact
      ? alert(`${name} is already in contacts`)
      : dispatch(fetchAddContact(contact)) && reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container sx={{marginTop: '10'}} >
    <Box component="form"
      onSubmit={handleSubmit}
      
      sx={{display: 'flex',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Typography variant="h4" gutterBottom>
        ADD CONTACT
      </Typography>
       <TextField
         name="name"
          label="Name"
          type="text"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
         <TextField
          name="number"
          label="Number"
          type="tel"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /> 
        {/* <TextField
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
      /> */}
      <Button type="submit" variant="outlined" size="medium" >ADD CONTACT</Button>
        </Box>
      </Box>
   
  </Container>
    // <form className={styles.contactForm} onSubmit={handleSubmit}>
    //   <label className={styles.contactLabel}>
    //     Name
    //     <input
    //       className={styles.contactInputName}
    //       onChange={handleChange}
    //       value={name}
    //       type="text"
    //       name="name"
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //     />
    //   </label>
    //   <label className={styles.contactLabel}>
    //     Number
    //     <input
    //       className={styles.contactInputNumber}
    //       onChange={handleChange}
    //       value={number}
    //       type="tel"
    //       name="number"
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //     />
    //   </label>
    //   <button className={styles.buttonAdd} type="submit">
    //     Add contact
    //   </button>
    // </form>
  );
};

export default ContactForm;