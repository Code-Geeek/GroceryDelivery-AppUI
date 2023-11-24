import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Categories from './Components/Categories';
import OrderGrocery from './Components/OrderGrocery';
import Cart from './Components/Cart';
import SignUp from './Components/SignUp';
import Login from './Components/Login';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='cart' element={<Cart/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='order-grocery' element={<OrderGrocery/>}/>
        <Route path='categories' element={<Categories/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
