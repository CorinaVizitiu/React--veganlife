
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import  Carousel  from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Home from './Pages/Home';
import Nutrition from './Pages/Nutrition';
import Recipes from './Pages/Recipes';
import MyAccount from './myaccount';

function App() {
 
  return (
    <div className="App">
     
    <BrowserRouter>
    <Routes>
      <Route path="/veganlife" element={<Home/>}/>
      <Route path="/Nutrition" element={<Nutrition/>}/>
      <Route path="/Recipes" element={<Recipes/>}/>
    <Route path="/myaccount" element={<MyAccount/>}/>
  
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
