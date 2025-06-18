// Guardar
localStorage.setItem('user', JSON.stringify(user));

// Leer
const savedUser = JSON.parse(localStorage.getItem('user'));
