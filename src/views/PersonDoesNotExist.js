import React, { useEffect, useState, useRef } from "react";

export default function Index({ pageTitle }) {
    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    let [loading, setLoading] = useState(true);
    let [personImage, setPersonImage] = useState([
        "https://thispersondoesnotexist.com/image",
    ]);
    let loadImageBtn = useRef();
    useEffect(() => {
        loadNewImage();
    }, []);
    function loadNewImage() {
        setLoading(true);
        setPersonImage([
            "https://thispersondoesnotexist.com/image?" + new Date().getTime(),
        ]);
        loadImageBtn.current.disabled = true;
        setTimeout(() => {
            loadImageBtn.current.disabled = false;
        }, 2500);
        setLoading(false);
    }
    return (
        <React.Fragment>
            {loading && (
                <div className="mt-5 text-center">
                    <h4>Loading...</h4>
                </div>
            )}
            <div className={loading ? "d-none" : "d-block"}>
                <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
                    <h4>This person does not exist</h4>
                    <img
                        className="person_does_not_exist_img img-thumbnail shadow-sm"
                        src={personImage}
                        alt="Person Does Not Exist"
                        loading="lazy"
                        onLoad={() => setLoading(false)}
                    />
                </div>
                <div className="text-center">
                    <button
                        className="mt-2 btn btn-link shadow-none text-decoration-none px-3 fw-bold"
                        ref={loadImageBtn}
                        onClick={() => loadNewImage()}
                    >
                        Next
                    </button>
                    <div className="mt-3">
                        <strong className="m-2">Source:</strong>
                        <a
                            href="https://thispersondoesnotexist.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://thispersondoesnotexist.com
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
