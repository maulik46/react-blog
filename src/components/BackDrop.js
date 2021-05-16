import React from "react";

function BackDrop({ model }) {
    return (
        <React.Fragment>
            <div
                className="d-flex justify-content-center align-items-center vh-100 position-fixed w-100"
                style={{
                    top: "0px",
                    zIndex: "99",
                    backgroundColor: "rgba(0,0,0,0.6)",
                }}
            >
                {model}
            </div>
        </React.Fragment>
    );
}

export default BackDrop;
