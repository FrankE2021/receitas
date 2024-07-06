import React, { useState } from 'react';
import { loginUser } from './Autenticacion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      alert('Login successful');
      navigate('/home'); // Redirige al usuario después del inicio de sesión
    } catch (error) {
      alert('Error logging in: ' + error.message);
    }
  };

  return (
		<div className="flex justify-center items-center h-screen bg-primary">
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className=" bg-black-gradient p-3 rounded-[10px] m-2">
        <label className="font-poppins block text-gradient text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input
            className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
						required
          />

        <label className="font-poppins block text-gradient text-sm font-bold mb-1 mt-5" htmlFor="password">Contraseña:</label>
          <input
            className="font-poppins shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
						required
					/>
			</div>  

      <button type="submit" className="mx-2 bg-gold-gradient text-black px-5 py-1 rounded-[10px] font-bold font-poppins text-[20px]">
        Login
      </button>
    </form>
		</div>
  );
};

export default Login;
