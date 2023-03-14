import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import { Box, ListItemText, Typography, List, ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MdPhone from '@mui/icons-material/Phone';
import { flexbox } from '@mui/system';
// import styles from './ContactList.module.css';

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

            {/* {name} : <span>{number}</span> */}
            <IconButton
              onClick={() => dispatch(fetchDeleteContact(id))}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
            {/* <Button onClick={() => dispatch(fetchDeleteContact(id))}>DELETE</Button> */}
          </ListItem>
        ))}
      </List>
    </Box>

    // <ul>
    //   {visibleContacts.map(({ name, number, id }) => (
    //     <li key={id} className={styles.contactItem}>
    //       {name} : <span>{number}</span>
    //       <button className={styles.button} onClick={() => dispatch(fetchDeleteContact(id))}>Delete</button>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default ContactList;
