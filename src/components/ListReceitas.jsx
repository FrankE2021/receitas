import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getReceitas } from './ObtenerReceta'; // Asegúrate de importar la función
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../style';
import Spinner from './Spinner';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ListReceitas = () => {
  const { data: receitas, isLoading, error } = useQuery('receitas', getReceitas);
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading recipes</div>;

  const filteredReceitas = receitas.filter(receita => 
    receita.receita.nome_medicamento.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <h1 className="border p-1 rounded-[10px] mb-5 flex justify-center items-center font-poppins text-[25px] font-extrabold text-gradient">
            RECEITAS:
          </h1>

          {/* Cuadro de búsqueda */}
          <div className="relative w-full mb-5">
            <input 
              type="text" 
              placeholder="Pesquisar pelo Nome do Medicamento" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="w-full p-2 border rounded-[50px]"
            />
            <FaSearch className="absolute top-3 right-4 text-black-500" />
          </div>

          <ul>
            {filteredReceitas.map(receita => (
              <li key={receita.id}>
                <Link to={`/detalles/${receita.id}`} className="no-underline">
                  <h2 className='flex justify-center border m-1 rounded-[10px] bg-black-gradient font-bold text-white text-[25px]'>
                    {receita.receita.nome_medicamento}
                    <span className='ml-5 text-gradient text-[15px]'>{receita.receita.data}</span>
                  </h2>
                </Link>
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

export default ListReceitas;
