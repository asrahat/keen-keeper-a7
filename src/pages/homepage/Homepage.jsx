import React from 'react';
import Banner from '../../homepage/Banner';
import Friends from '../friends/Friends';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="divider container mx-auto"></div>
            <Friends></Friends>
        </div>
    );
};

export default Homepage;