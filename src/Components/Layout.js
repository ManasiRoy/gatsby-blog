import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import "./styles.scss"

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
