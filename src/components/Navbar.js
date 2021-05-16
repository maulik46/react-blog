import React from "react";

function Navbar() {
    return (
        <div className="navbar bg-dark p-2 flex-wrap">
            <div>
                <h5 className="text-white">My Blogs</h5>
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <button className="nav-link active text-white btn btn-link shadow-none">
                        Home
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link text-white btn btn-link shadow-none">
                        About
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link text-white btn btn-link shadow-none">
                        Contact us
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
