import React from 'react';
import { useQuery } from 'react-query';
import { getReceitas } from './ObtenerReceta'; // Asegúrate de importar la función
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../style';
import Spinner from './Spinner'

const ListPacientes = () => {
  const { data: receitas, isLoading, error } = useQuery('receitas', getReceitas);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading recipes</div>;

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen flex flex-col">

    {/* =================================NavBar========================================== */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* ==============================Main Content=========================================== */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-grow`}>
      <div className={`${styles.boxWidth}`}>
        <h1 className="border p-2 rounded-[10px] mb-5 flex justify-center items-center font-poppins text-[25px] font-extrabold text-gradient">RECEITAS:</h1>
        <ul>
          {receitas.map(receita => (
            <li key={receita.id}>
              <h2 className='flex justify-center text-gradient text-[25px]'>{receita.paciente.nome}</h2>
            </li>
          ))}
      </ul>

      </div>
    </div>
    
    {/* ==============================Footer=========================================== */}
    <div className="mt-auto w-full">
      <Footer />
    </div>
  </div>
  );
};

export default ListPacientes;
