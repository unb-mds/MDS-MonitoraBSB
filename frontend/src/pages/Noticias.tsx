import React from 'react';
import Logo from "../components/Logo";  

const Noticias = () => {
  const works = [
    {
      image: "/unnamed.jpg",
      title: "Via em Ceilândia passa por recuperação asfáltica",
      alt: "Pista"
    },
    {
      image: "/INTERNA-2-Foto-Geovana-Albuquerque-3-2.jpg",
      title: "Ceilândia tem mais de R$ 151 milhões em investimentos para melhorar vida de seus 350 mil moradores",
      alt: "Investimentos"
    },
    {
      image: "/INTERNA-2-Foto-Geovana-Albuquerque-3-2.jpg",
      title: "Ceilândia tem mais de R$ 151 milhões em investimentos para melhorar vida de seus 350 mil moradores",
      alt: "Investimentos"
    },
    {
      image: "/INTERNA-2-Foto-Geovana-Albuquerque-3-2.jpg",
      title: "Ceilândia tem mais de R$ 151 milhões em investimentos para melhorar vida de seus 350 mil moradores",
      alt: "Investimentos"
    },
    {
      image: "/INTERNA-2-Foto-Geovana-Albuquerque-3-2.jpg",
      title: "Ceilândia tem mais de R$ 151 milhões em investimentos para melhorar vida de seus 350 mil moradores",
      alt: "Investimentos"
    },
    {
      image: "/pista.jpeg",
      title: "Novas obras em Ceilândia",
      alt: "Obras"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Logo />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 md:h-64">
                <img
                  src={work.image}
                  alt={work.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-800 font-medium text-lg leading-snug">
                  {work.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Noticias;
