import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Página Pública</h1>
      <p>Bem-vindo! Esta página está disponível para todos os visitantes.</p>
      <Link to="/login"><button>Ir para Login</button></Link>
    </div>
  );
}

export default Home;
