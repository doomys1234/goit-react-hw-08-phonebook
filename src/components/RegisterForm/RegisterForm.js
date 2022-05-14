import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperations';
import s from './RegisterForm.module.scss';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    dispatch(operations.register({ name, email, password }));
    // addUser({ name:name, email: email, password: password })
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          Name
          <input
            className={s.input}
            onChange={handleChange}
            type={name}
            name="name"
            autoFocus
            value={name}
          ></input>
        </label>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            onChange={handleChange}
            type={email}
            name="email"
            autoFocus
            value={email}
          ></input>
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            onChange={handleChange}
            type={password}
            name="password"
            autoFocus
            value={password}
          ></input>
        </label>
        <button className={s.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
