export const fakeLogin = (username, password) => (
  new Promise((resolve) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        resolve({
          status: true,
          token: 'dsfkjsbdfbskjdbfhbsdjfhsbdjhfb',
          username: 'admin',
          message: 'login successful',
        });
      } else {
        resolve({
          status: false,
          message: 'username/password is incorrect',
        });
      }
    }, 2000);
  })
);

export const setAuthToken = (token) => {
  localStorage.setItem('token', token);
};

export const getAuthToken = () => localStorage.getItem('token');

export const removeAuthToken = () => {
  localStorage.removeItem('token');
};

export const isLoggedIn = () => {
  if (localStorage.getItem('token')) return true;
  return false;
};
