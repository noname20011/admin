import Topbar from "./comopnents/topbar/Topbar";

import './app.css' 
function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <div className="other">

      </div>
      </div>
      
    </div>
  );
}

export default App;
