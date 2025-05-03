import React from 'react';
    import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import "../Styles/Blogs.css";
const Blogs = () => {
    return (
        <>
            <div className="back-link-container">
                <Link to="/" className="back-link">
                    <FaArrowLeft className="back-icon" />
                    Back
                </Link>
            </div>
            <h1 className='myblogs'>My Blogs</h1>
            <div className="blogs-container">
                <div className="blog-box">
                    <Link to="/sog">
                        <div className="blog-card">
                            <p>30-04-2025</p>
                            <h2>Stages of Grief ❤️</h2>
                            <p>Grief is an emotional response to losing someone or something important to you...</p>
                            <button className="read-btn">Read More</button>
                        </div>
                    </Link>
                </div>
                <div className="blog-box">
                    <Link to="">
                        <div className="blog-card">
                            <p>30-04-2025</p>
                            <h2></h2>
                            <p></p>
                            <button className="read-btn">Read More</button>
                        </div>
                    </Link>
                </div> 

            </div>
        </>
    );
};
export default Blogs;
