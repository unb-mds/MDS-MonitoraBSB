import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "../styles/Registros.css"; 
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Context/AuthContext';

export default function Login() {
  const position = [-15.7801, -47.9292];
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
      const result = await login(email, password);
      if (result.ok) {
          navigate('/');
      } else {
          setError(result.error || 'Erro ao fazer login');
      }
  };

  return (
      <div className="relative h-screen w-full">
          <MapContainer 
              center={position} 
              zoom={10} 
              style={{ height: '100%', width: '100%' }}
          >
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
          </MapContainer>
          
          <Logo />

          <div className="login">
              <h1>FAÇA O LOGIN</h1>
              <p>E veja todas as obras que estão acontecendo em sua cidade</p>

              <div className="input-container-login">
                  <input 
                      type="text" 
                      placeholder="Email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                  />
                  <input 
                      type="password" 
                      placeholder="Senha" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} 
                  />
                  <button 
                      className="btn-login"
                      onClick={handleLogin}
                  >
                      Entrar
                  </button>
              </div>

              {error && <p className="error-message">{error}</p>}

              <div className="link-login">
                  <a 
                      href="#"
                      onClick={() => navigate("/email")} >
                      Esqueci a senha
                  </a>

                  <a 
                      href="#"
                      onClick={() => navigate("/cadastro")} >
                      Não tenho conta
                  </a>
              </div>
          </div>
      </div>
  );
}