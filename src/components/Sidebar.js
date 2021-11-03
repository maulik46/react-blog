import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ onClickMenu, onCloseMenu }) {
    const all_links = [
        { name: "Todos", route: "/" },
        { name: "Number Game", route: "/number-game" },
        { name: "Simon Game", route: "/simon-game" },
        { name: "Person Does Not Exist", route: "/person-does-not-exist" },
        { name: "Stone Paper Scissors", route: "/stone-paper-scissors" },
        { name: "Tic Tac Toe", route: "/tic-tac-toe" },
        { name: "Memory Game", route: "/memory-game" },
    ];

    return (
        <React.Fragment>
            <div className="mySidebar overflow-auto">
                <ul className="nav flex-column">
                    <li className="nav-item d-block d-sm-none">
                        <button
                            className="nav-link text-white btn btn-link shadow-none rounded-2"
                            onClick={() => {
                                onCloseMenu(false);
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                                style={{
                                    fill: "#ffffff",
                                    verticalAlign: "middle",
                                    width: "25px",
                                    height: "25px",
                                }}
                                data-reactid=".0.b.$13.0.0"
                            >
                                <g data-reactid=".0.b.$13.0.0.0">
                                    <path
                                        d="M15.41 16.09l-4.58-4.59 4.58-4.59-1.41-1.41-6 6 6 6z"
                                        data-reactid=".0.b.$13.0.0.0.0"
                                    ></path>
                                </g>
                            </svg>
                        </button>
                    </li>
                    {all_links.map((item, index) => (
                        <React.Fragment key={index}>
                            <li className="nav-item my-1">
                                <NavLink
                                    to={item.route}
                                    exact
                                    activeClassName="active"
                                >
                                    <button
                                        className="nav-link text-white btn btn-link shadow-none rounded-1 w-100 "
                                        style={{ textAlign: "left" }}
                                        onClick={onClickMenu}
                                    >
                                        {index + 1}.
                                        <span className="m-2">{item.name}</span>
                                    </button>
                                </NavLink>
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
            <div
                className="vh-100 position-fixed w-100"
                onClick={() => {
                    onCloseMenu(false);
                }}
                style={{
                    top: "0px",
                    zIndex: "1",
                    backgroundColor: "rgba(0,0,0,0.6)",
                }}
            ></div>
        </React.Fragment>
    );
}
