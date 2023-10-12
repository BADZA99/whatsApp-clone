import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import {  useSelector } from 'react-redux';
// import { ChatIcon } from "./svg";
// import socket from 'socket'


function App() {
  const {user}=useSelector((state)=>state.user);
  const {token}=user;
  // console.log(user);
  return (
    <div className="dark">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={token ? <Home socket={socket} />:<Navigate to="/login"/>} /> */}
          {/* <Route exact path="/login" element={!token ? <Login />:<Navigate to="/"/>}/> */}
          {/* <Route exact path="/register" element={!token ? <Register /> : <Navigate to="/" />}
          /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
