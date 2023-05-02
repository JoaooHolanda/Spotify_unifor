import React from 'react';
import { Link } from 'react-router-dom';
import { playlistTitles } from '../../../components/Card/CardConstants';
import Playlist from '../../../components/Playlist/Playlist';
import { linkOptions } from '../HomeConstants';

import './HomeMajorContent.scss';

const HomeMajorContent = () => {
    return (
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
                                    disabled={option[0] === '|'}
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
            <div className="HomeMajorContent__playlists">
                {playlistTitles.map(title => {
                    return <Playlist title={title} key={title} />;
                })}
            </div>
        </div>
    );
};

export default HomeMajorContent;
