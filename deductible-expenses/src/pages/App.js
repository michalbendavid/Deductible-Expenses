import { useRouter } from 'next/router';
// import '../styles/App.css';
// import Navbar from './components/Navbar';
import { useAuth } from '../context/auth.Context';

function App() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (user)
    return (
      <div className='App'>
        <Navbar />
        <h2>Hello {user.email}</h2>
        <button onClick={logout}>Sign Out</button>
      </div>
    );
  return (
    <div className='App'>
      <h2>Deductible Expenses - Home Page</h2>
      <button onClick={() => router.push("/register")}>Register</button>
      <button onClick={() => router.push("/login")}>Sign In</button>
    </div>
  );
}

export default App;