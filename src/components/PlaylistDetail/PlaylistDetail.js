import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { pics } from '../Card/CardConstants';

import { linkOptions } from '../../pages/Home/HomeConstants';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './PlaylistDetail.scss';

const PlaylistDetail = () => {
    const { id } = useParams();

    const details = pics.find(pic => {
        return pic.id === parseInt(id);
    });

    return (
        <div className="Home">
            <div className="HomeContainer">
                <SideBar />
                <div className="HomeMajorContent">
                    <div className="HomeMajorContent__header">
                        <ul className="HomeMajorContent__list-arrows">
                            <li className="HomeMajorContent__arrow">
                                <button className="HomeMajorContent__button-arrow">
                                    &larr;
                                </button>
                            </li>
                            <li>
                                <button className="HomeMajorContent__button-arrow">
                                    &rarr;
                                </button>
                            </li>
                        </ul>
                        <ul className="HomeMajorContent__list-options">
                            {linkOptions.map(option => {
                                return (
                                    <li
                                        className="HomeMajorContent__option"
                                        key={option[0]}
                                    >
                                        <button
                                            className="HomeMajorContent__button-option"
                                            disabled={option[0] !== '|'}
                                        >
                                            <Link
                                                to={option[1]}
                                                className={
                                                    option[0] !== '|'
                                                        ? 'option'
                                                        : 'separator'
                                                }
                                                target="_blank"
                                            >
                                                {option[0]}
                                            </Link>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="PlaylistDetail">
                        <div className="PlaylistDetail-wrapper">
                            <div className="Card__faceCard">
                                <img
                                    src={details.source}
                                    alt="capa01"
                                    className="Card__picCard"
                                />
                            </div>
                            <p className="PlaylistDetail__title">
                                {details.title}
                            </p>
                        </div>
                        <div className="Musicas">
                            <ul className="ListaMusicas">
                                {details.musicas.map(musica => {
                                    return (
                                        <li
                                            key={musica.title}
                                            className="musica"
                                        >
                                            <p className="music-title">
                                                {musica.title}
                                            </p>
                                            <audio controls="controls">
                                                <source
                                                    src={musica.file}
                                                    type="audio/mpeg"
                                                />
                                                <source
                                                    src={musica.file}
                                                    type="audio/ogg"
                                                />
                                            </audio>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PlaylistDetail;
