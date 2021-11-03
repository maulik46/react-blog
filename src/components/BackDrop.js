import React from "react";

function BackDrop({ model,onClose }) {
    return (
        <React.Fragment>
            <div
                className="d-flex justify-content-center align-items-center vh-100 position-fixed w-100"
                style={{
                    top: "0px",
                    zIndex: "99",
                    backgroundColor: "rgba(0,0,0,0.6)",
                }}
                onClick={onClose}
            >
                {model}
            </div>
        </React.Fragment>
    );
}

export default BackDrop;
