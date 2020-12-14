import React from 'react';
import { Link } from 'gatsby';



const activeStyles = {
    background: 'white',
    color: 'rebeccapurple'
};

const NavLink = ({ children, ...props }) => (
    <Link
        {...props}
        activeStyle={activeStyles}
    >
        {children}
    </Link>
);

export default NavLink;
