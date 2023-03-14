import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box, Container, Typography } from '@mui/material';

import { fetchContacts } from '../../redux/contacts/contacts-operations';

import {
  selectContacts,
  selectLoading,
} from 'redux/contacts/contacts-selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Container sx={{ marginTop: '40px', display: 'flex' }}>
        <Box>
          {/* <Typography variant="h4" gutterBottom>
            ADD CONTACT
          </Typography> */}
          <ContactForm />
          <div>{isLoading && 'Request in progress...'}</div>
        </Box>
        <Box sx={{ marginLeft: '200px' }}>
          <Typography variant="h4" gutterBottom>
            YOUR CONTACTS
          </Typography>
          {contacts.length > 1 && <Filter />}
          {isLoading && 'Loading...'}
          <ContactList />
        </Box>
      </Container>
    </main>
  );
};

export default Contacts;
