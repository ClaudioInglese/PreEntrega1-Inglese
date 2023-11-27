import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>
        <h3>PowerHard Computacion</h3>
      </Link>

      <div className="categories">
        <NavLink to="/" exact className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Inicio </NavLink>
        <NavLink to="/category/hardware" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Hardware </NavLink>
        <NavLink to="/category/perifericos" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Perifericos </NavLink>
        <NavLink to="/category/notebooks" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Notebooks </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
