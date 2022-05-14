import { useGetContactsQuery, useAddContactsMutation } from 'redux/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filterItems } from '../../redux/contactSLice';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import { filterSelector } from '../../redux/selectors';
import Contacts from 'components/Contacts/Contacts';
import Phonebook from 'components/Phonebook/Phonebook';
import Filter from 'components/Filter/Filter';
export default function ContactsPage() {
  const { data, isLoading } = useGetContactsQuery();
  const [addItem, { isLoading: isAdding }] = useAddContactsMutation();
  const dispatch = useDispatch();
  const valueFilter = useSelector(state => filterSelector(state));
  const contacts = data;

  const addContact = e => {
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    console.log(name, number);
    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already exists`);

      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    addItem(newContact);
    toast.success('Horay! Contact is added :)');
  };

  const filterChange = e => {
    dispatch(filterItems(e.currentTarget.value));
  };

  const getNormalizedContacts = contacts => {
    if (isLoading) {
      return;
    }
    const normalizedFilter = valueFilter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredItems = getNormalizedContacts(contacts);

  return (
    <>
      <Phonebook onSubmit={addContact} adding={isAdding} />
      <Filter value={valueFilter} onChange={filterChange} />
      {filteredItems ? (
        <Contacts contacts={filteredItems} isLoading={isLoading} />
      ) : (
        <h3>You have no contacts yet</h3>
      )}
    </>
  );
}
