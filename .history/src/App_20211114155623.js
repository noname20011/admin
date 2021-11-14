import Topbar from "./comopnents/topbar/Topbar";
import Sidebar from "./comopnents/sidebar/Sidebar";
import Home from "./pages/home/Home.jsx"
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import './app.css' 

import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Routes >
            <Route path="/" exact element={<Home/>}/>
            <Route path="/users" exact element={<UserList/>}/>
            <Route path="/user/:userId" exact element={<User/>}/>
            <Route path="/register" exact element={<NewUser/>}/>
            <Route path="/products" exact element={<ProductList/>}/>
            <Route path="/product/:id" exact element={<Product/>}/>
            <Route path="/addproduct/" exact element={<NewProduct/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
