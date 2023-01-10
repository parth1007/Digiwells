import './App.css';
import Login from './Pages/Login/Login'
import Admin from './Pages/Admin/Admin'
import Homepage from './Pages/Homepage/Homepage'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">


    <BrowserRouter>
        <Routes>
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Homepage />} />
        </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
