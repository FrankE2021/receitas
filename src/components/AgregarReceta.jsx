import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Asegúrate de importar la configuración de Firebase

const addReceita = async (receita) => {
  try {
    const docRef = await addDoc(collection(db, 'receitas'), receita);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export { addReceita };
