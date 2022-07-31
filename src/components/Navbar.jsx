import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>

            <img src="" />
            <ul className='nav-bar-list'>
                <li className='nav-bar-item'><NavLink to="/">Home</NavLink></li>
                <li className='nav-bar-item'> <NavLink to="/login">Login</NavLink></li>
                <li className='nav-bar-item'><NavLink to="/student">Aluno</NavLink></li>
                <li className='nav-bar-item'><NavLink to="/teacher">Professor</NavLink></li>
                <li className='nav-bar-item'><NavLink to="/manager">Administrador</NavLink></li>

            </ul>

        </nav>
    )
}
export default Navbar;