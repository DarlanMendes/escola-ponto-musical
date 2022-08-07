
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Student from './pages/Student/Student';
import Teacher from './pages/Teacher/Teacher';
import Manager from './pages/Manager/Manager';
import Login from './pages/Login/Login'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>

      

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path='/Login' element={<Login/>}/>


        </Routes>


      </Router>




    </div>
  );
}

export default App;
