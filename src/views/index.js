import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import BlogModel from "../components/BlogModel";
import BlogCreateModel from "../components/BlogCreateModel";
import BackDrop from "../components/BackDrop";

export default function Index({ pageTitle }) {
    const allBlogs = [];
    const [blogs, setBlogs] = useState(allBlogs);
    const [blogDetail, setblogDetail] = useState({});
    const [isOpenModel, setOpenModel] = useState(false);
    const [isOpenCreateModel, setOpenCreateModel] = useState(false);

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    function viewBlog(index) {
        const blogPost = blogs[index];
        setOpenModel(true);
        setblogDetail(blogPost);
    }

    function deleteBlog(index) {
        blogs.splice(index, 1);
        setBlogs([...blogs]);
    }

    function submitBlogData({ blogTitle, blogDescription }) {
        setBlogs([
            { title: blogTitle, description: blogDescription },
            ...blogs,
        ]);
        setOpenCreateModel(false);
    }

    return (
        <React.Fragment>
            <div className="px-1 px-sm-3 mt-3 mx-2 mx-sm-3">
                <nav className="navbar rounded-2 border-bottom">
                    <h4>All Todo</h4>
                    <div>
                        <button
                            className="btn btn-success px-3"
                            onClick={() => setOpenCreateModel(true)}
                        >
                            Create Todo
                        </button>
                    </div>
                </nav>
            </div>
            <div className="row mx-1 mx-sm-3">
                {blogs.map((blog, index) => (
                    <React.Fragment key={index}>
                        <BlogCard
                            {...blog}
                            onView={() => viewBlog(index)}
                            onDelete={() => deleteBlog(index)}
                        />
                    </React.Fragment>
                ))}
                {blogs.length === 0 && (
                    <div className="text-center h4 mt-5">
                        No todos are available..!
                    </div>
                )}
            </div>

            {isOpenCreateModel && (
                <BackDrop
                    model={
                        <BlogCreateModel
                            submitBlogData={submitBlogData}
                            onClose={() => setOpenCreateModel(false)}
                        />
                    }
                ></BackDrop>
            )}

            {isOpenModel && (
                <BackDrop
                    model={
                        <BlogModel
                            {...blogDetail}
                            onClose={() => setOpenModel(false)}
                        />
                    }
                ></BackDrop>
            )}
        </React.Fragment>
    );
}
