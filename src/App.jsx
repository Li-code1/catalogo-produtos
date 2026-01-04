import { useState, useEffect } from 'react';
import ProdutoCard from './components/ProdutoCard';
import './App.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Estados do Formulário
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  // Simulação de API
  useEffect(() => {
    setTimeout(() => {
      const dadosMockados = [
        { id: 1, nome: "Teclado Mecânico", preco: "250.00", descricao: "RGB e Switch Blue" },
        { id: 2, nome: "Mouse Gamer", preco: "120.00", descricao: "12000 DPI" }
      ];
      setProdutos(dadosMockados);
      setCarregando(false);
    }, 2000);
  }, []);

  const adicionarProduto = (e) => {
    e.preventDefault();
    const novoProduto = {
      id: Date.now(),
      nome,
      preco,
      descricao
    };
    setProdutos([...produtos, novoProduto]);
    
    // Limpar campos
    setNome('');
    setPreco('');
    setDescricao('');
  };

  return (
    <div className="container">
      <h1>Catálogo de Produtos</h1>

      {/* Formulário */}
      <form onSubmit={adicionarProduto} className="formulario">
        <input 
          type="text" placeholder="Nome do Produto" 
          value={nome} onChange={(e) => setNome(e.target.value)} required 
        />
        <input 
          type="number" placeholder="Preço" 
          value={preco} onChange={(e) => setPreco(e.target.value)} required 
        />
        <textarea 
          placeholder="Descrição" 
          value={descricao} onChange={(e) => setDescricao(e.target.value)} required 
        />
        <button type="submit">Adicionar Produto</button>
      </form>

      <hr />

      {/* Listagem */}
      {carregando ? (
        <p>Carregando produtos...</p>
      ) : (
        <div className="lista-produtos">
          {produtos.map(produto => (
            <ProdutoCard 
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              descricao={produto.descricao}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;