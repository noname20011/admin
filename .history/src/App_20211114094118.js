import Topbar from "./comopnents/topbar/Topbar";
import Sidebar from "./comopnents/sidebar/Sidebar";
import Home from "./pages/home/Home.jsx"

import './app.css' 

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/users" exact component={}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
