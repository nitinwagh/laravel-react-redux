import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">Logo</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/posts" activeClassName="active">Posts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/post/add" activeClassName="active">New Post</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Dropdown link
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav pull-right">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout" activeClassName="active">Logout</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register" activeClassName="active">SignUp</NavLink>
                    </li>
                </ul>
            </nav>
            <br />
        </div>
    );
}

export default Nav;
