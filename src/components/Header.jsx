import React from "react";
import { Link } from "react-router-dom"

function Header (){
    return(
        <header>
            <div className="container">
                <nav>
                    <ul className="header">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/form">Form</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;