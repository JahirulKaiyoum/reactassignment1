import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="menu">
        <nav>
            <a class="text-danger" href="#Home">Home <span class="sr-only">(current)</span></a>
            <a class="text-danger" href="#All Courses">All Courses</a>
            </nav>
        </div>
    );
};

export default Header;

      