import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFootballBall, FaTimes, FaBars } from 'react-icons/fa'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link className="navbar-logo">
                        <FaFootballBall className="navbar-icon" />
                        TSF Parasports
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? (
                            <FaTimes className="fa-times" />
                        ) : (
                            <FaBars className="fa-bars" />
                        )}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-items">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to="About" className="nav-links">
                                About
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to="Work" className="nav-links">
                                Work
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to="Contact" className="nav-links">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
