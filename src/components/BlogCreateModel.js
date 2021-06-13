import React, { useState } from "react";
export default function BlogCreateModel({ onClose, submitBlogData }) {
    const [blogTitle, setBlogTitle] = useState("");
    const [blogDescription, setBlogDescription] = useState("");
    const [isValid, setIsValid] = useState(true);

    function handleBlogTitle(e) {
        let title = e.target.value;
        setBlogTitle(title);
    }

    function handleBlogDescription(e) {
        let description = e.target.value;
        setBlogDescription(description);
    }

    function submitBlog() {
        if (blogTitle.length > 0 && blogDescription.length > 0) {
            submitBlogData({ blogTitle, blogDescription });
        } else {
            setIsValid(false);
        }
    }

    return (
        <React.Fragment>
            <div>
                <div className="modal-dialog set-model-with">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Todo</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div className="modal-body">
                            {!isValid && (
                                <div>
                                    <div className="alert alert-danger p-3">
                                        <h6 className="mb-0">
                                            Title and Description is required.
                                        </h6>
                                    </div>
                                </div>
                            )}

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className={
                                        !isValid && blogTitle.length === 0
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onKeyUp={handleBlogTitle}
                                />
                                <label htmlFor="floatingInput">Title</label>
                            </div>
                            <div className="form-floating">
                                <textarea
                                    className={
                                        !isValid && blogDescription.length === 0
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    placeholder="Write description here"
                                    id="floatingTextarea"
                                    onKeyUp={handleBlogDescription}
                                    style={{ height: "100px" }}
                                ></textarea>
                                <label htmlFor="floatingTextarea">
                                    Description
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-success px-4"
                                onClick={submitBlog}
                            >
                                Add
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary px-3"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
