import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { login } from './auth-actions';

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username] = useState('admin');
  const [password] = useState('admin');

  useEffect(() => {
    dispatch(login(username, password));
  }, [dispatch, username, password]);


  window.console.log('auth:', auth);

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
