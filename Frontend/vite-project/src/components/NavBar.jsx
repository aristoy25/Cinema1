import { Link } from "react-router";
import './NavBar.Module.css';
const NavBar = () => {
    return (
        <ul className="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/movies">Movies</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    );
    };
export default NavBar;