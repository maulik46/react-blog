import React, { useEffect } from "react";

export default function Index({ pageTitle }) {
    useEffect(() => {
        document.title = pageTitle;
    }, []);
    return (
        <React.Fragment>
            <div className="text-center mt-4 mb-3">
                <h4>This person does not exist</h4>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <img
                    className="person_does_not_exist_img img-thumbnail"
                    src="https://thispersondoesnotexist.com/image"
                    alt="Flowers"
                />
            </div>
            <div className="text-center">
                <button
                    className="mt-2 btn btn-link text-decoration-none px-3 fw-bold"
                    onClick={() => window.location.reload()}
                >
                    Next
                </button>
            </div>
        </React.Fragment>
    );
}
