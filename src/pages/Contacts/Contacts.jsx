// const Contacts = () => {
//     return (
//         <div>
//             <p>Contacts</p>
//         </div>
//     )
// }

// export default Contacts;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { fetchContacts } from '../../redux/contacts/contacts-operations';

import styles from './Contacts.module.css';
import { selectContacts, selectLoading } from 'redux/contacts/contacts-selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);



  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.sectionContacts}>
      <h2 className={styles.title}>Add Contact</h2>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <h2 className={styles.title}>Your Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {isLoading && 'Loading...'}
      <ContactList />
    </div>
  );
};

export default Contacts;