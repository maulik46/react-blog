import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Index from "../views/index";
import About from "../views/about";
import Contact from "../views/contact-us";

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
                            <Link to="/">
                                <button className="nav-link active text-white btn btn-link shadow-none rounded-1">
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link to="/about">
                                <button className="nav-link text-white btn btn-link shadow-none rounded-1">
                                    About
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link to="/contact-us">
                                <button className="nav-link text-white btn btn-link shadow-none rounded-1">
                                    Contact us
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <Switch>
                    <Route path="/contact-us">
                        <Contact />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default Navbar;
