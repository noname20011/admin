import Topbar from "./comopnents/topbar/Topbar";
import Sidebar from "./comopnents/sidebar/Sidebar";
import './app.css' 
function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <div className="other">
        sdasd
      </div>
      </div>
      
    </div>
  );
}

export default App;
