import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import { Box, ListItemText, List, ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';

import AccountBoxIcon from '@mui/icons-material/AccountBox';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <Box>
      <List sx={{ width: '350px' }}>
        {visibleContacts.map(({ name, number, id }) => (
          <ListItem key={id}>
            <Avatar>
              <AccountBoxIcon fontSize="small" />
            </Avatar>
            <ListItemText primary={name} sx={{ marginLeft: '15px' }} />
            <ListItemText primary={number} />
            <IconButton
              onClick={() => dispatch(fetchDeleteContact(id))}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
           
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContactList;
