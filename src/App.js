
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Student from './pages/Student/Student';
import Teacher from './pages/Teacher/Teacher';
import Manager from './pages/Manager/Manager';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>

      <Navbar/>

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Manager" element={<Manager />} />



        </Routes>


      </Router>




    </div>
  );
}

export default App;
