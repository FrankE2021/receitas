import React, { useState } from 'react';
import { addReceita } from './AgregarReceta'; // Importa la función para agregar recetas

const AddReceita = () => {
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

  return (
    <form onSubmit={handleSubmit}>
      {/* Aquí irían los campos de entrada para cada dato de la receta */}


			{/* Ejemplo para el nombre del paciente */}
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

				{/* =====================================Idade================================================================ */}
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
			</div>	
      
      
      {/* Añadir más campos según sea necesario */}



      <button type="submit" className="mt-2 bg-gold-gradient text-black px-5 py-1 rounded-[10px] font-bold font-poppins text-[20px]">Salvar Receita</button>
    </form>
  );
};

export default AddReceita;
