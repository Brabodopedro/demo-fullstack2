import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await axios.post('http://localhost:8000/auth/token', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      const { access_token } = response.data;
      localStorage.setItem('token', access_token);

      const userInfo = await axios.get('http://localhost:8000/auth/me', {
        headers: { Authorization: `Bearer ${access_token}` }
      });

      localStorage.setItem('user', JSON.stringify(userInfo.data));
      navigate('/painel');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Usuário" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
