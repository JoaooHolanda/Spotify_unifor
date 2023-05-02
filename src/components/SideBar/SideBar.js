import classNames from 'classnames';
import React from 'react';
import { AiFillHeart, AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { BiLibrary } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { MdAddBox } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/spotifyImg.png';
import './SideBar.scss';
import { externalLinks, linguagem } from './SideBarConstants';

const SideBar = () => {
    const { pathname } = useLocation();

    const buttons = [
        {
            txt: 'Início',
            icon: pathname === '/Home' ? <AiFillHome /> : <AiOutlineHome />,
            highlighted: pathname === '/Home',
        },
        { txt: 'Buscar', icon: <BsSearch /> },
        { txt: 'Sua Biblioteca', icon: <BiLibrary /> },
        { txt: 'Criar playlist', icon: <MdAddBox /> },
        { txt: 'Músicas Curtidas', icon: <AiFillHeart /> },
    ];

    return (
        <div className="SideBar">
            <div className="SideBar__header">
                <Link to="/Home" className="SideBar__header-link">
                    <img src={logo} alt="spotify-dark-lg" />
                    Spotify
                </Link>
            </div>
            <div className="SideBar__main">
                <ul className="SideBar__list-btn">
                    {buttons.map(btn => {
                        return (
                            <li key={btn.txt} className="SideBar__item">
                                <button
                                    className={classNames('SideBar__btn', {
                                        'SideBar__btn highlighted':
                                            btn.highlighted,
                                    })}
                                >
                                    {btn.icon}
                                    {btn.txt}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <ul className="SideBar__list-external-links">
                    {externalLinks.map(link => {
                        return (
                            <li key={link.id} className="SideBar__link-li">
                                <a
                                    className="SideBar__link"
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.txt}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className="SideBar__btn-langue-wrapper">
                    <button className="SideBar__btn-language">
                        <TbWorld />
                        {linguagem}
                    </button>
                </div>
            </div>
        </div>
    );
};

SideBar.defaultPropTypes = {};

export default SideBar;
