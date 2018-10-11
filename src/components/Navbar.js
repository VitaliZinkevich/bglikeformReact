import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = ()=>{
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <Link className="navbar-brand" to="/">bglikeform</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">

            <li className="nav-item ">
                <NavLink className="nav-link" to="/">Home </NavLink>
            </li>

            <li className="nav-item ">
                <NavLink className="nav-link" to="/search">Search </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item ">
                 <NavLink className="nav-link " to='/myaccount'>My Account</NavLink>
                  
            </li>
            
            </ul>

            
        </div>
    </nav>
    )

}

export default withRouter (Navbar)