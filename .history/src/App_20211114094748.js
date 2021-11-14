import Topbar from "./comopnents/topbar/Topbar";
import Sidebar from "./comopnents/sidebar/Sidebar";
import Home from "./pages/home/Home.jsx"
import User from "./pages/user/User";
import './app.css' 

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Routes>
            <Route path="/" exact component={Home}/>
            <Route path="/users" exact component={User}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
