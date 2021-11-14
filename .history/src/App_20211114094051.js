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
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
