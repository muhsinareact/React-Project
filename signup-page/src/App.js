import './App.css';
import { Login } from './components/Login.jsx';
import './components/ShoppingPage/ShoppingPage.css';
import { ShoppingPage } from './components/ShoppingPage/ShoppingPage.jsx';
import { ProductDetails } from './components/ProductDetails/ProductDetails.jsx';
import {Routes, Route} from "react-router-dom";
import { CartPage } from './components/Cart/CartPage.jsx';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<ShoppingPage/>}></Route>
        <Route path='/products/:productId' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
