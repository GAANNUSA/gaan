import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js'; // Agregar signInWithEmailAndPassword aquí

const firebaseConfig = {
  apiKey: "AIzaSyAxqbZo2qiNH4RdT0viNayBM7dFJxC8NA8",
  authDomain: "gaannusa.firebaseapp.com",
  projectId: "gaannusa",
  storageBucket: "gaannusa.appspot.com",
  messagingSenderId: "489251140923",
  appId: "1:489251140923:web:c81cda92d1515ede9bb31e",
  measurementId: "G-JFHBGXRMD8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

cerrar.addEventListener('click', (e) => {
    e.preventDefault(); // Evita la redirección automática
    auth.signOut().then(() => {
      alert('Sesión cerrada');
      window.location.href = "index.html"; // Redirige manualmente después de mostrar el mensaje
    }).catch((error) => {
      alert('Error al cerrar sesión'); 
    })
  });
  

  var btnCrud = document.getElementById('crud');

        // Agregar un event listener para redirigir al hacer clic
        btnCrud.addEventListener('click', function() {
            window.location.href = 'crud.html';
        });

        var btnCrud = document.getElementById('crudr');

        // Agregar un event listener para redirigir al hacer clic
        btnCrud.addEventListener('click', function() {
            window.location.href = 'crudr.html';
        });