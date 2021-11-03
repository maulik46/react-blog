import React, { useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import RouterLinks from "../routes/RouterLinks";
import Sidebar from "./Sidebar";
import Logo from "../logo.svg";

function Navbar() {
    let [isShowMenu, showMenu] = useState(false);

    return (
        <>
            <Router>
                <nav className="navbar align-items-center bg-dark py-2  flex-wrap position-sticky top-0 topNavigation shadow-sm">
                    <div className="logoHeading">
                        <NavLink to="/" exact>
                            <div className="d-flex align-items-center">
                                <img src={Logo} height="50" alt="" />
                                <h5 className="text-white py-1">React Apps</h5>
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <button
                            className="btn btn-sm shadow-none px-3"
                            onClick={() => showMenu((isShowMenu = !isShowMenu))}
                        >
                            <svg
                                fill="#ffffff"
                                viewBox="0 0 100 80"
                                width="30"
                                height="30"
                            >
                                <rect width="100" height="18"></rect>
                                <rect y="30" width="100" height="18"></rect>
                                <rect y="60" width="100" height="18"></rect>
                            </svg>
                        </button>
                    </div>
                </nav>
                {isShowMenu && (
                    <Sidebar
                        onClickMenu={() => showMenu((isShowMenu = !isShowMenu))}
                        onCloseMenu={(isClose) => showMenu(isClose)}
                    />
                )}

                <RouterLinks />
            </Router>
        </>
    );
}

export default Navbar;
