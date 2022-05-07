import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotfoundPage from './components/404page/NotfoundPage';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/home' element={<Shop />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={ <NotfoundPage /> } />

      </Routes>
      
    </div>
  );
}

export default App;
