import React from "react";
import { Link, NavLink } from 'react-router-dom';
const Navbar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/ ">Home</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-NavLink" activeClassName="active" aria-current="page" to="/movies">Movies</NavLink>
                        <NavLink className="nav-NavLink" activeClassName="active" to="/users">Users</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;