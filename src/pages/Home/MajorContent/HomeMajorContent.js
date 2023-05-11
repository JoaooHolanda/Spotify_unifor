import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { playlistTitles } from "../../../components/Card/CardConstants";
import Playlist from "../../../components/Playlist/Playlist";
import { linkOptions, linkOptionsLogin } from "../HomeConstants";

import "./HomeMajorContent.scss";

const HomeMajorContent = () => {
  const [userPlaylists, setUserPlaylists] = useState();
  let links = linkOptions;

  let user = JSON.parse(localStorage.getItem("loginUser"));

  useEffect(() => {
    setUserPlaylists(user?.playlists);
  }, []);

  if (user) {
    links = linkOptionsLogin(user.name);
  }
  return (
    <div className="HomeMajorContent">
      <div className="HomeMajorContent__header">
        <ul className="HomeMajorContent__list-arrows">
          <li className="HomeMajorContent__arrow">
            <button className="HomeMajorContent__button-arrow">&larr;</button>
          </li>
          <li>
            <button className="HomeMajorContent__button-arrow">&rarr;</button>
          </li>
        </ul>
        <ul className="HomeMajorContent__list-options">
          {links.map((option) => {
            return (
              <li className="HomeMajorContent__option" key={option[0]}>
                <button
                  className="HomeMajorContent__button-option"
                  disabled={option[0] === "|"}
                >
                  <Link
                    to={option[1]}
                    className={option[0] !== "|" ? "option" : "separator"}
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
        {userPlaylists?.length > 0 ? (
          <Playlist
            title={"Minhas Playlists"}
            key={"Minhas playlists"}
            isUserPlaylist={true}
          />
        ) : (
          playlistTitles.map((title) => {
            return (
              <Playlist title={title} key={title} isUserPlaylist={false} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomeMajorContent;
