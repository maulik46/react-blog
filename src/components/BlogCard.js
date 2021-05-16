import React from "react";

function BlogCard({ title, description, onView, onDelete }) {
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="card my-2 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {description.length > 50
                                ? `${description.slice(0, 50)}...`
                                : description}
                        </p>
                        <div>
                            <button
                                className="btn btn-primary px-4"
                                onClick={onView}
                            >
                                View
                            </button>
                            <button
                                className="btn btn-danger px-3 mx-2"
                                onClick={onDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BlogCard;
