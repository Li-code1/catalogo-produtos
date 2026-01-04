import React from 'react';

const ProdutoCard = ({ nome, preco, imagem, descricao }) => {
  return (
    <div className="card">
      <img src={imagem || "https://via.placeholder.com/150"} alt={nome} />
      <h3>{nome}</h3>
      <p className="preco">R$ {preco}</p>
      <p>{descricao}</p>
    </div>
  );
};

export default ProdutoCard;