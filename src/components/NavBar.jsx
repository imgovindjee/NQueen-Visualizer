import React from 'react'

import './NavBar.css'

const NavBar = ({ msg }) => {
    return (
        <div>
            <nav className="navbar" style={{ backgroundColor: "rgba(10, 25, 47, 1)", margin: "auto" }}>
                <div>
                    <a href="/n-queen" className="navbarlink">N-Queen</a>
                </div>
                <div>
                    <span style={{ color: '#ffffff' }}>{msg}</span>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
