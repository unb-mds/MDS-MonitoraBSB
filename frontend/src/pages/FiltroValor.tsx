import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "../styles/Filtros.css"; 
import Logo from "../components/Logo";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useObrasCoordinates } from '../hooks/useObras';

const API_URL = import.meta.env.VITE_MONITORA_API_URL as string; 

export default function FiltroValor() {
  const navigate = useNavigate();
  const position = [-15.7801, -47.9292];
  const [statusFiltroValores, setStatusFiltroValores] = useState<string[]>([]); 
  const { obras, loading, error, fetchFilteredObrasValue } = useObrasCoordinates();

  const handleCheckboxChange = (value: string) => {
    setStatusFiltroValores((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) 
        : [...prev, value]
    );
  };

  const handleLimpar = () => {
    setStatusFiltroValores([]); 
  };

  const handleConcluir = async () => {
    try {
      const filteredData = await fetchFilteredObrasValue(undefined, undefined, statusFiltroValores);
      navigate('/mapa', { state: { filteredObras: filteredData } });
    } catch (error) {
      console.error('Error fetching filtered obras:', error);
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
        <div className="filter-container">
            <h1>ESCOLHA O VALOR</h1>
            
            <div className="checkbox-filter value">
                <label>
                  <input 
                    type="checkbox" 
                    value="cem" 
                    checked={statusFiltroValores .includes("cem")}
                    onChange={() => handleCheckboxChange("cem")}
                  />
                  Abaixo de R$ 100.000,00
                </label>

                <label>
                  <input 
                    type="checkbox" 
                    value="duzentos" 
                    checked={statusFiltroValores .includes("duzentos")}
                    onChange={() => handleCheckboxChange("duzentos")}
                  />
                  Abaixo de R$ 200.000,00
                </label>

                <label>
                  <input 
                    type="checkbox" 
                    value="trezentos" 
                    checked={statusFiltroValores .includes("trezentos")}
                    onChange={() => handleCheckboxChange("trezentos")}
                  />
                  Abaixo de R$ 300.000,00
                </label>

                <label>
                  <input 
                    type="checkbox" 
                    value="quinhentos" 
                    checked={statusFiltroValores .includes("quinhentos")}
                    onChange={() => handleCheckboxChange("quinhentos")}
                  />
                  Abaixo de R$ 500.000,00
                </label>

                <label>
                  <input 
                    type="checkbox" 
                    value="setecentos" 
                    checked={statusFiltroValores .includes("setecentos")}
                    onChange={() => handleCheckboxChange("setecentos")}
                  />
                Abaixo de R$ 700.000,00
                </label>

                <label>
                  <input 
                    type="checkbox" 
                    value="novecentos" 
                    checked={statusFiltroValores .includes("novecentos")}
                    onChange={() => handleCheckboxChange("novecentos")}
                  />
                  Abaixo de R$ 900.000,00
                </label>

                <label>
                  <input 
                    type="checkbox" 
                    value="milhao" 
                    checked={statusFiltroValores .includes("milhao")}
                    onChange={() => handleCheckboxChange("milhao")}
                  />
                  Acima de R$ 1.000.000,00
                </label>
            </div>

            <div className="filter-btn">
                <button className="clean-btn" onClick={handleLimpar}>
                  LIMPAR
                </button>
                <button className="check-btn" onClick={handleConcluir}  >
                  CONCLUIR
                </button>
            </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="obras-container">
            <h2>Obras Filtradas</h2>
            <ul>
                {obras.map((obra) => (
                    <li key={obra.id}>
                        {obra.nome} - {obra.situacao}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}