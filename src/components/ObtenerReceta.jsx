import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const getReceitas = async () => {
  const querySnapshot = await getDocs(collection(db, 'receitas'));
  const receitas = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return receitas;
};

export { getReceitas };
