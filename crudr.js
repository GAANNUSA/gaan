let users = JSON.parse(localStorage.getItem('users')) || [
    { username: 'Usuario1', password: 'Contraseña1' },
    { username: 'Usuario2', password: 'Contraseña2' }
];

const userTableBody = document.getElementById('userTableBody');
const userForm = document.getElementById('userForm');

// Función para guardar los usuarios en localStorage
function guardarUsuarios() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Función para renderizar la tabla de usuarios
function renderizarUsuarios() {
    userTableBody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="eliminarUsuario(${index})">Eliminar</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
    guardarUsuarios(); // Guardar los cambios en localStorage
}

// Función para eliminar un usuario
function eliminarUsuario(index) {
    users.splice(index, 1);
    renderizarUsuarios();
}

// Función para editar un usuario
function editarUsuario(index) {
    const user = users[index];
    const newUsername = prompt('Nuevo nombre de usuario:', user.username);
    const newPassword = prompt('Nueva contraseña:', user.password);
    if (newUsername !== null && newPassword !== null) {
        users[index] = { username: newUsername, password: newPassword };
        renderizarUsuarios();
    }
}

// Función para agregar un nuevo usuario
userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    if (newUsername && newPassword) {
        users.push({ username: newUsername, password: newPassword });
        renderizarUsuarios();
        userForm.reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

// Renderizar la tabla de usuarios inicialmente
renderizarUsuarios();
