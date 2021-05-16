import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogModel from "../components/BlogModel";
import BlogCreateModel from "../components/BlogCreateModel";
import BackDrop from "../components/BackDrop";

export default function Index() {
    const allBlogs = [
        {
            id: 1,
            title: "Lorem title",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            title: "Veniam title",
            description:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 3,
            title: "Irure title",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 4,
            title: "Occaecat title",
            description:
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];
    const [blogs, setBlogs] = useState(allBlogs);
    const [blogDetail, setblogDetail] = useState({});
    const [isOpenModel, setOpenModel] = useState(false);
    const [isOpenCreateModel, setOpenCreateModel] = useState(false);

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
            ...blogs,
            { title: blogTitle, description: blogDescription },
        ]);
        setOpenCreateModel(false);
    }

    return (
        <React.Fragment>
            <div className="row mx-3 mt-4">
                <div className="px-3">
                    <nav className="alert alert-success navbar">
                        <h5>All Blogs</h5>
                        <div>
                            <button
                                className="btn btn-success px-3"
                                onClick={() => setOpenCreateModel(true)}
                            >
                                Create Blog
                            </button>
                        </div>
                    </nav>
                </div>
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
                        No blogs available..!
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
