  
import './App.css';
import M from './M';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <M/>
      </BrowserRouter>
    </div>
  );
}

export default App;
