
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Nutrition from './Pages/Nutrition';
import Recipes from './Pages/Recipes';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Nutrition" element={<Nutrition/>}/>
      <Route path="/Recipes" element={<Recipes/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
