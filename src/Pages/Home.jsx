import React from 'react';
import "../Styles/Home.css";
import { Link } from 'react-router-dom'; 
import { FaGithub, FaLinkedin, FaGlobe, FaUser } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='home'>
            <h1 className='home-title'>Thread & Thought</h1>
            <p className='home-subtitle'>
                Sharing personal stories, insights, and experiences in development and tech-related content.
            </p>
            <div className="social-icons">
                <a href="https://github.com/anandhu-as" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://anandhuuuu.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FaGlobe />
                </a>
                <Link to="/about">
                    <FaUser />
                </Link>
            </div>
            <Link to="/blogs">
                <button className="explore-btn">Explore my content</button>
            </Link>
        </div>
    );
};

export default Home;
