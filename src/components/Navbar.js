import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import RouterLinks from "../RouterLinks";

function Navbar() {
    return (
        <>
            <Router>
                <div className="navbar bg-dark p-2 flex-wrap">
                    <div className="m-2">
                        <h5 className="text-white ">My Blogs</h5>
                    </div>
                    <ul className="nav">
                        <li className="nav-item mx-1">
                            <NavLink to="/" exact activeClassName="active">
                                <button className="nav-link text-white btn btn-link shadow-none rounded-1">
                                    Blog Todo
                                </button>
                            </NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink to="/number-game">
                                <button className="nav-link text-white btn btn-link shadow-none rounded-1">
                                    Number Game
                                </button>
                            </NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink to="/contact-us">
                                <button className="nav-link text-white btn btn-link shadow-none rounded-1">
                                    Contact us
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <RouterLinks />
            </Router>
        </>
    );
}

export default Navbar;
