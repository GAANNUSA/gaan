let users = JSON.parse(localStorage.getItem('users')) || [
    { username: 'Usuario1', password: 'Contraseña1' },
    { username: 'Usuario2', password: 'Contraseña2' }
];

const userTableBody = document.getElementById('userTableBody');
const userForm = document.getElementById('userForm');

// Función para guardar los usuarios en localStorage
function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Función para renderizar la tabla de usuarios
function renderUsers() {
    userTableBody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>
                <button onclick="editUser(${index})">Editar</button>
                <button onclick="deleteUser(${index})">Eliminar</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
    saveUsers(); // Guardar los cambios en localStorage
}

// Función para eliminar un usuario
function deleteUser(index) {
    users.splice(index, 1);
    renderUsers();
}

// Función para editar un usuario
function editUser(index) {
    const user = users[index];
    const newUsername = prompt('Nuevo nombre de usuario:', user.username);
    const newPassword = prompt('Nueva contraseña:', user.password);
    if (newUsername !== null && newPassword !== null) {
        users[index] = { username: newUsername, password: newPassword };
        renderUsers();
    }
}

// Función para agregar un nuevo usuario
userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    if (newUsername && newPassword) {
        users.push({ username: newUsername, password: newPassword });
        renderUsers();
        userForm.reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

// Renderizar la tabla de usuarios inicialmente
renderUsers();
