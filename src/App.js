import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import Product from "./components/Product"
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products/*' element={<Products/>}>
           <Route path=':id' element={<Product/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
