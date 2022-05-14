import { ToastContainer } from 'react-toastify';
import {
  
  Routes,
  Route,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import HomePage from 'components/HomePage/HomePage';
import AppBar from 'components/AppBar/AppBar';
import Register from 'components/Register/Register';
import UserName from 'components/UserName/UserName';
import Title from 'components/Title/Title';

import s from './App.module.scss';
import ContactsPage from 'components/ContactsPage/ContactsPage';

function App() {
  // const dispatch = useDispatch();
  // const valueFilter = useSelector(state => filterSelector(state));
  
 

  // const addContact = e => {
  //   const name = e.currentTarget.elements.name.value;
  //   const number = e.currentTarget.elements.number.value;
  //   console.log(name, number);
  //   if (contacts.find(contact => contact.name === name)) {
  //     toast.error(`${name} is already exists`);

  //     return;
  //   }

  //   const newContact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   addItem(newContact);
  //   toast.success('Horay! Contact is added :)');
  // };

  // const filterChange = e => {
  //   dispatch(filterItems(e.currentTarget.value));
  // };

  // const getNormalizedContacts = contacts => {
  //   if (isLoading) {
  //     return;
  //   }
  //   const normalizedFilter = valueFilter.toLowerCase();
  //   return contacts.filter(item =>
  //     item.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  // const filteredItems = getNormalizedContacts(contacts);

  return (
    <div className={s.container}>
      <AppBar />
      <Title title={'Welcome'}/>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<UserName/>}/>
        </Route>
        
        <Route path='contacts' element={<ContactsPage  />} ></Route>
        
        
          
        
        
       
         
        </Routes>
            
            

           
           
    
      <ToastContainer
        position={'top-right'}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'dark'}
      />
    </div>
  );
}

export default App;
