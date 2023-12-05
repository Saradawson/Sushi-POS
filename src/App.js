import './App.css';
import { useState, } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const date = new Date();
  const [year] = useState(date.getFullYear());

  return (
    <div className="App">
      <header>
        <h1 style={{width:'100%', textAlign:'center'}}>Sushi</h1>
      </header>
      <main style={{textAlign:'center'}}>
        <LoginForm />  
      </main>
      <footer>
        <p>&copy; Sushi {year}</p>
      </footer>
    </div>
  );
}

export default App;
