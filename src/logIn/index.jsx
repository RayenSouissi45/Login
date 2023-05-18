import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
// import the CSS file for animations
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    // Call backend API 
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-600 to-white flex flex-col items-center justify-center ml-[-120px] ">
        <Navbar/>
        <div className="text-center text-lg mb-20 font-bold text-2xl text-white">
          <p className="moving-text">
            Bienvenue à la banque STB ! Nous vous invitons à vous inscrire pour obtenir un accès à notre tableau de bord client.
          </p>
        </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none "
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="shadow  border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none "
            type="button"
            onClick={handleLogin}
          >
            Se connecter
          </button>
          <a
            className=" font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Mot de passe oublié ?
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default Login;
