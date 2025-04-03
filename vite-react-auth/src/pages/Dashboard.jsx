import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem' }}>
        <h1>Painel do Usuário</h1>
        <p>Bem-vindo, {user?.full_name || user?.username}!</p>
        <button onClick={handleLogout}>Sair</button>
      </div>
    </div>
  );
}

export default Dashboard;
