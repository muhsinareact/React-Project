import './App.css';
import { Login } from './components/login.jsx';
import './components/ShoppingPage/ShoppingPage.css';
import { ShoppingPage } from './components/ShoppingPage/ShoppingPage.jsx';
import { ProductDetails } from './components/ProductDetails/ProductDetails.jsx';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<ShoppingPage/>}/>
        {/* <Route path='/productdetails' element={<ProductDetails/>}/> */}
      </Routes>
    </div>
    
  );
}

export default App;
