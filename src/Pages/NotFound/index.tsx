import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
     <h2>Página não encontrada</h2>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link to="/">Voltar para a Página Inicial</Link>
    </div>
  );
};

export default NotFound;
