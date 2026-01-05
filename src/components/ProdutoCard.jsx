import React from 'react';

const ProdutoCard = ({ nome, preco, imagem, descricao }) => {
  return (
    <div className="card">
     <img src={imagem} alt={nome} className="produto-imagem" />
      <h3>{nome}</h3>
      <p className="preco">R$ {preco}</p>
      <p>{descricao}</p>
    </div>
  );
};

export default ProdutoCard;