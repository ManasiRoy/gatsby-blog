import { Link } from 'gatsby';
import React from 'react';
import NavLink from './Navlink';

const Navbar = () => (
    <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to="/" className="navbar-brand"> Gatsby Website</Link>
            <div className="navbar-collapse">
                <div className="navbar-nav ml-auto">
                    <NavLink to="/" className="nav-item nav-link">Welcome</NavLink>
                    <NavLink to="/images" className="nav-item nav-link">Images</NavLink>
                    <NavLink to="/blogs" className="nav-item nav-link">Blog</NavLink>
                </div>
            </div>
        </nav>
    </header >

);


export default Navbar;
