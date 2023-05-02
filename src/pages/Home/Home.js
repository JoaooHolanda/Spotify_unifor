import React from 'react';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';

import './Home.scss';
import HomeMajorContent from './MajorContent/HomeMajorContent';

const Home = () => {
    return (
        <div className="Home">
            <div className="HomeContainer">
                <SideBar />
                <HomeMajorContent />
            </div>
            <Footer />
        </div>
    );
};

Home.defaultPropTypes = {};

export default Home;
