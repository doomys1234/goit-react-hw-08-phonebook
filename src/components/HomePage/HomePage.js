import { Outlet } from 'react-router-dom';
import s from './HomePage.module.scss';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function HomePage() {
  const [showButton, setShowButton] = useState(() => {
    return JSON.parse(localStorage.getItem('isButtonHidden')) ?? true;
  });
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path === '/') {
      setShowButton(true);
      localStorage.setItem('isButtonHidden', JSON.stringify(false))
      
    } else {
      setShowButton(false);
    }
  }, [path]);

  const showAuthButton = () => {
    navigate('/login');
    setShowButton(false);
    localStorage.setItem('isButtonHidden', JSON.stringify(false))
  };

  return (
    <div>
      <Outlet />
      {showButton && (
        <button onClick={showAuthButton} className={s.button} type="button" >
          Try it now
        </button>
      )}
    </div>
  );
}
