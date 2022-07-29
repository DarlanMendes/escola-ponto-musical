import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>

            <img src="" />
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/student">Aluno</NavLink></li>
                <li><NavLink to="/teacher">Professor</NavLink></li>
                <li><NavLink to="/manager">Administrador</NavLink></li>

            </ul>

        </nav>
    )
}
export default Navbar;