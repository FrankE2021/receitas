import React, { useState } from 'react';
import { addReceita } from './AgregarReceta'; // Importa la función para agregar recetas
import styles from '../style';


const AddReceita = () => {
  const [pacienteClick, setPacienteClick] = useState(false);
  const [receita, setReceita] = useState({
    paciente: {
      nome: '',
      idade: '',
      sexo: '',
      endereco: '',
      cpf: ''
    },
    medico: {
      nome: '',
      crm: '',
      endereco: '',
      telefone: '',
      assinatura_carimbo: ''
    },
    receita: {
      data_prescricao: '',
      nome_medicamento: '',
      dosagem: '',
      forma_farmaceutica: '',
      quantidade_prescrita: 0,
      instrucoes_uso: {
        posologia: '',
        intervalo_doses: '',
        duracao_tratamento: ''
      }
    },
    informacoes_complementares: {
      diagnostico: '',
      observacoes_adicionais: '',
      informacoes_alergias: '',
      interacoes_medicamentosas: ''
    },
    dados_controle: {
      numero_receita: '',
      codigo_barras: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field, subField] = name.split('.');
    if (subField) {
      setReceita(prevState => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: {
            ...prevState[section][field],
            [subField]: value
          }
        }
      }));
    } else {
      setReceita(prevState => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: value
        }
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReceita(receita);
      alert('Receita adicionada com sucesso');
    } catch (error) {
      alert('Erro ao adicionar receita');
    }
  };

  const [selectedOption, setSelectedOption] = useState('paciente');

  const handleSelectPaciente = () => {
    setPacienteClick(!pacienteClick)
    setSelectedOption('paciente');
  };

  return (
    <div>
      <div className="flex justify-center mb-2">
        <button onClick={handleSelectPaciente} className={`mr-5 py-1 px-3 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none hover-bounce active-click ${styles} ${selectedOption === 'paciente' ? 'border-[2px]' : 'receta'}`}>
          {pacienteClick === false ? 'VAI PARA OS PACIENTES' : 'VAI PARA AS RECETAS'}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
       {pacienteClick ? (
          // ============================Formulario de Paciente==============
        <form onSubmit={handleSubmit}>
          <div className='bg-black-gradient-2 p-2 border rounded-[10px]'>
            {/* ==================================Nome============================= */}
            <label className="font-poppins block text-gradient text-sm font-bold mb-1" htmlFor="name">NOME:</label>
              <input
                className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="nombre"
                type="text"
                name="paciente.nome"
                value={receita.paciente.nome}
                onChange={handleChange}
                placeholder="Nome do Paciente"
              />

            {/* =====================================Idade=================================================== */}
            <label className="font-poppins block text-gradient text-sm font-bold mb-1" htmlFor="name">IDADE:</label>
              <input
                className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="idade"
                type="number"
                name="paciente.idade" 
                value={receita.paciente.idade}
                onChange={handleChange}
                placeholder="Idade do Paciente"
              />
            {/* =====================================Sexo=================================================== */}
            <label className="font-poppins block text-gradient text-sm font-bold mb-1" htmlFor="name">SEXO:</label>
              <input
                className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="sexo"
                type="genre"
                name="paciente.sexo" 
                value={receita.paciente.sexo}
                onChange={handleChange}
                placeholder="Sexo do Paciente"
              />
              {/* =====================================Endereço=================================================== */}
            <label className="font-poppins block text-gradient text-sm font-bold mb-1" htmlFor="name">ENDEREÇO:</label>
              <input
                className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="endereco"
                type="text"
                name="paciente.endereco" 
                value={receita.paciente.endereco}
                onChange={handleChange}
                placeholder="Endereço do Paciente"
              />
              {/* =====================================CPF=================================================== */}
            <label className="font-poppins block text-gradient text-sm font-bold mb-1" htmlFor="name">CPF:</label>
              <input
                className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="cpf"
                type="number"
                name="paciente.cpf" 
                value={receita.paciente.cpf}
                onChange={handleChange}
                placeholder="CPF do Paciente"
              />
          </div>	        
        </form>

        ) : (
          // ============================Formulario de Receita==============
      
        <form onSubmit={handleSubmit}>
          <div className='bg-black-gradient-2 p-2 border rounded-[10px]'>


            {/* =====================================Nome Medicamento============================ */}
            <label className="font-poppins block text-gradient text-sm font-bold mb-1" htmlFor="name">MEDICAMENTO:</label>
              <input
                className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="medicamento"
                type="text"
                name="receita.nome_medicamento" 
                value={receita.receita.nome_medicamento}
                onChange={handleChange}
                placeholder="Medicamento"
              />

            {/* ==================================Data Prescricao============================= */}
            <label className="font-poppins block text-gradient text-sm font-bold mb-1" htmlFor="name">DATA:</label>
              <input
                className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="date"
                type="date"
                name="receita.data"
                value={receita.receita.data_prescricao}
                onChange={handleChange}
                placeholder=""
              />
              
            {/* =====================================Dosagem============================ */}
            <label className="font-poppins block text-gradient text-sm font-bold mb-1" htmlFor="name">DOSAGEM:</label>
              <input
                className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="dosagem"
                type="text"
                name="receita.dosagem" 
                value={receita.receita.dosagem}
                onChange={handleChange}
                placeholder="Dosagem"
              />

            {/* =====================================Cantidad Prescrita============================ */}
            <label className="font-poppins block text-gradient text-sm font-bold mb-1" htmlFor="name">QUANTIDADE PRESCRITA:</label>
              <input
                className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="cantidad"
                type="text"
                name="receita.quantidade_prescrita" 
                value={receita.receita.quantidade_prescrita}
                onChange={handleChange}
                placeholder="Quantidade Prescrita"
              />

            {/* =====================================Instrucciones de Uso============================ */}
            <label className="font-poppins block text-gradient text-sm font-bold mb-1" htmlFor="name">INSTRUÇÕES:</label>
              <input
                className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                id="instrucciones"
                type="text"
                name="receita.instrucoes_uso.posologia" 
                value={receita.receita.instrucoes_uso.posologia}
                onChange={handleChange}
                placeholder="Instruções de uso"
              />

          </div>	 
        </form>)}
        <button type="submit" className="flex justify-center mt-2 bg-gold-gradient text-black px-5 py-1 rounded-[10px] font-bold font-poppins text-[20px]">Salvar</button>
      </form>
    </div>  
  );
};

export default AddReceita;
