import './app.css'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserList from './pages/home/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">



        <Sidebar/>
        <Routes>
        <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/newUser" element={<NewUser/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
