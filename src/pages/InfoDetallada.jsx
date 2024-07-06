// InfoDetallada.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getReceitas } from '../components/ObtenerReceta';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import styles from '../style';

const InfoDetallada = () => {
  const { id } = useParams(); // Obtén el ID de los parámetros de la URL
  const { data: receitas, isLoading, error } = useQuery('receitas', getReceitas);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading recipe details</div>;

  const receita = receitas.find(r => r.id === id);

  if (!receita) return <div>Recipe not found</div>;

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen flex flex-col">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-grow`}>
        <div className={`${styles.boxWidth}`}>

					{/* =====================Info Paciente===================== */}
          <h1 className="border p-1 rounded-[10px] mb-3 flex justify-center items-center font-poppins text-[15px] font-extrabold text-gradient">INFORMAÇÃO PACIENTE:</h1>
          <h2 className='flex justify-center border m-1 rounded-[10px] bg-black-gradient font-bold text-white text-[15px]'>
            <span className='mr-5 text-gradient text-[15px]'>Nome:</span>
            {receita.paciente.nome}
          </h2>

					<div className='flex justify-center border m-1 rounded-[10px] bg-black-gradient font-bold text-white text-[15px]'>
						<span className='mr-5 text-gradient text-[15px]'>Idade:</span>
            {receita.paciente.idade}
					</div>

					<div className='flex justify-center border m-1 rounded-[10px] bg-black-gradient font-bold text-white text-[15px]'>
						<span className='mr-5 text-gradient text-[15px]'>Sexo:</span>
            {receita.paciente.sexo}
					</div>

					<div className='flex justify-center border m-1 rounded-[10px] bg-black-gradient font-bold text-white text-[15px]'>
						<span className='mr-5 text-gradient text-[15px]'>Endereço:</span>
            {receita.paciente.endereco}
					</div>

					<div className='flex justify-center border m-1 rounded-[10px] bg-black-gradient font-bold text-white text-[15px]'>
						<span className='mr-5 text-gradient text-[15px]'>CPF:</span>
            {receita.paciente.cpf}
					</div>

					{/* =====================Info Receita===================== */}
					<h1 className="border mt-8 p-1 rounded-[10px] mb-3 flex justify-center items-center font-poppins text-[15px] font-extrabold text-gradient">INFORMAÇÃO RECEITA:</h1>
					{/* =====================================Nome Medicamento============================ */}
					<div className='flex justify-center border m-1 rounded-[10px] bg-black-gradient font-bold text-white text-[15px]'>
						<span className='mr-5 text-gradient text-[15px]'>Nome:</span>
            {receita.receita.nome_medicamento}
					</div>

					{/* ==================================Data Prescricao============================= */}
					<div className='flex justify-center border m-1 rounded-[10px] bg-black-gradient font-bold text-white text-[15px]'>
						<span className='mr-5 text-gradient text-[15px]'>Data:</span>
            {receita.receita.data_prescricao}
					</div>

					{/* =====================================Dosagem============================ */}
					<div className='flex justify-center border m-1 rounded-[10px] bg-black-gradient font-bold text-white text-[15px]'>
						<span className='mr-5 text-gradient text-[15px]'>Dosagem:</span>
            {receita.receita.dosagem}
					</div>

					{/* =====================================Cantidad Prescrita============================ */}
					<div className='flex justify-center border m-1 rounded-[10px] bg-black-gradient font-bold text-white text-[15px]'>
						<span className='mr-5 text-gradient text-[15px]'>Quantidade Prescrita:</span>
            {receita.receita.quantidade_prescrita}
					</div>

					{/* =====================================Instrucciones de Uso============================ */}
					<div className='flex justify-center border m-1 rounded-[10px] bg-black-gradient font-bold text-white text-[15px]'>
						<span className='mr-5 text-gradient text-[15px]'>Instruções:</span>
            {receita.receita.instrucoes_uso.posologia}
					</div>



          {/* Agrega más detalles de la receta aquí */}
        </div>
      </div>
      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
};

export default InfoDetallada;
