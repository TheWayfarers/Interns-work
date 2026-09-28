import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                Contact Book
            </div>

            <div className="navbar-links">
                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/add">
                    Add Contact
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;