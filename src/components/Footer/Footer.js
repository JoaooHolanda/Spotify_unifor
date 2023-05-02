import React from 'react';
import { Link } from 'react-router-dom';

import { amostraSpotify, inscrevaSe, inscreverMsg } from './FooterConstants';

import './Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <Link to="/Cadastro" className="Footer__footer-link">
                <div className="Footer__wrapper-txt">
                    <p className="Footer__txt">{amostraSpotify}</p>
                    <p className="Footer__txt2">{inscreverMsg}</p>
                </div>
                <p className="Footer__txt3">{inscrevaSe}</p>
            </Link>
        </div>
    );
};

Footer.defaultPropTypes = {};

export default Footer;
