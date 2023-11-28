import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBarContainer">
        <nav>
        <Link to='/'><img src="https://i.ibb.co/Tg0jjbD/powerhard-logo.jpg" alt="Logo"></img></Link>

        <div className="categories">            
            <NavLink to="/category/hardware" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> <button>Hardware</button> </NavLink>
            <NavLink to="/category/perifericos" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> <button>Perifericos</button> </NavLink>
            <NavLink to="/category/notebooks" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> <button>Notebooks</button> </NavLink>
        </div>
        <CartWidget />
        </nav>
    </div>
  );
}

export default NavBar;
