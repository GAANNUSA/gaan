import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const auth = getAuth();
const db = getFirestore();

// Función para cambiar el nombre de usuario
document.getElementById('change-name').addEventListener('click', async () => {
    const newName = prompt('Ingrese el nuevo nombre de usuario:');
    if (newName) {
        try {
            await updateProfile(auth.currentUser, {
                displayName: newName
            });
            await setDoc(doc(db, 'users', auth.currentUser.uid), {
                displayName: newName
            }, { merge: true }); // Guarda el nombre en la base de datos
            document.getElementById('user-info').textContent = newName;
        } catch (error) {
            console.error('Error al cambiar el nombre:', error);
        }
    }
});

// Verificar si el usuario está autenticado y cargar su nombre
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            document.getElementById('user-info').textContent = userData.displayName;
        }
    }
});
