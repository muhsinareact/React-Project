// import './App.css';
// import { Login } from './components/login.jsx';
import './components/ShoppingPage/ShoppingPage.css';
import { ShoppingPage } from './components/ShoppingPage/ShoppingPage.jsx';

function App() {
  return (
    <div>
      {/* <Login/> */}
      <ShoppingPage/>
      <main>
        <section id='prod-details'>
        <h2>Products</h2>
        <ul>
          
        </ul>
        </section>
      </main>
    </div>
    
  );
}

export default App;
