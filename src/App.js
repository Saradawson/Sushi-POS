import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import MainPage from './components/mainPage';

function App() {
  const date = new Date();
  const [year] = useState(date.getFullYear());
  

  return (
    <div className="App">
      <header>
        <h1 style={{width:'100%', textAlign:'center'}}>Sushi</h1>
      </header>
      <main style={{textAlign:'center'}}>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/main' element={<MainPage/>}/>
        </Routes>
      </main>
      <footer>
        <p>&copy; Sushi {year}</p>
      </footer>
    </div>
  );
}

export default App;
