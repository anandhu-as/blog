import React from 'react';
import "../Styles/BlogPost.css";
import {  blog1Explanation } from '../Constants/blogPost';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Blog1 = () => {
    return (
        <>
            <Link to="/blogs" className="back-link">
                <FaArrowLeft className="back-icon" />
                Back
            </Link>
            <div className="blog-container">
                <h2 className="grief-title">"What is Grief? A Personal Journey Through Grief"</h2>
              
                <pre className="full-explanation">
                    {blog1Explanation}
                </pre>
            </div>
        </>
    );
};

export default Blog1;
