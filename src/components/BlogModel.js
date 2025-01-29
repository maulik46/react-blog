import React from "react";
export default function BlogModel({ title, description, onClose }) {
    return (
        <React.Fragment>
            <div>
                <div className="modal-dialog overflow-auto set-model-with bg-white p-4 rounded">
                    <div className="modal-content">
                        <div className="justify-content-between modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            ></p>
                        </div>
                        <div className="modal-footer mt-3 gap-2">
                            <button
                                type="button"
                                className="btn btn-secondary"
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
