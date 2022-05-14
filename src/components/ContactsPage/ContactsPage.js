import Contacts from "components/Contacts/Contacts"
import Phonebook from "components/Phonebook/Phonebook"
import Filter from "components/Filter/Filter"
export default function ContactsPage({onSubmit,adding,contacts,valueFilter,filterChange,isLoading}) {
    
    return (
        <>
            <Phonebook onSubmit={onSubmit} adding={adding}  />
            <Filter value={valueFilter} onChange={filterChange} />
            <Contacts contacts={contacts} isLoading={isLoading}/>
        </>
        
    )
}