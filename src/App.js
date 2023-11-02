import logo from './logo.svg';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";
import Assignment4 from "./Labs/a4";

//import './App.css';


function App() {
  return (
      <HashRouter>
          <div>
              <Routes>
                  <Route path="/" element={<Navigate to="/Labs"/>}/>
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route path="/Labs/*" element={<Labs/>}/>
                  <Route path="/Kanbas/*" element={<Kanbas/>}/>
              </Routes>
          </div>
      </HashRouter>
  );
}

export default App;
