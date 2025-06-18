// src/utils/auth.js
export const loginUser = (userData) => {
  localStorage.setItem('usuarioActual', JSON.stringify(userData));
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('usuarioActual'));
};

export const logoutUser = () => {
  localStorage.removeItem('usuarioActual');
};
