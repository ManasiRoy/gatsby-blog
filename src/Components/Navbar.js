import React from 'react'
import { Link } from 'gatsby'
import './styles.scss'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/images">Images</Link>
                </li>
                <li>
                    <Link to="/blogs">Blog Posts</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar
