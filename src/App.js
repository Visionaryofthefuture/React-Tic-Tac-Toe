import logo from './logo.svg';
import  Board , {Square} from './Components/Square';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';

function App() {
  return (
    <div className="App">
      <Board />
      

    </div>

  );
}

export default App;
